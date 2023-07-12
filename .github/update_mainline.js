const fs = require("fs").promises;
const crypto = require("crypto");
const { https } = require('follow-redirects');

async function main({github, core}) {
    const [owner, repo] = ["crystal-lang", "crystal"];

    const {data: {assets, name}} = await github.rest.repos.getLatestRelease({
        owner, repo
    });

    if (!assets) {
        core.error("No releases found");
        return;
    }

    const windowsRelease = assets.find(
        platformRelease => (platformRelease.name.includes("windows") && platformRelease.name.includes(".zip"))
    );

    if(!windowsRelease) {
        core.error("Failed to find win32 asset in latest release.")
    }

    const urls = [
        windowsRelease.browser_download_url,
    ];

    const data = JSON.parse(await fs.readFile("bucket/crystal.json", "utf8"));

    const new_data = {
        ...data,
        "version": `${name}`,
        "url": urls.concat(data["url"].slice(1)),
    };

    if (new_data["version"] === data["version"] && new_data["url"].toString() === data["url"].toString()) {
        return;
    }

    if (data["hash"]) {
        const hashes = await Promise.all(urls.map(hash_url));
        new_data["hash"] = hashes.concat(data["hash"].slice(1));
    }

    await fs.writeFile("bucket/crystal.json", JSON.stringify(new_data, null, 4) + "\n", "utf8");
}

function hash_url(url) {
    return new Promise((resolve, reject) => {
        https.get(url, (response) => {
            const hash = crypto.createHash("sha256");
            response.on("error", reject);
            response.on("data", (chunk) => hash.update(chunk));
            response.on("end", () => resolve(hash.digest("hex").toUpperCase()));
        });
    });
}

module.exports = main;

if (require.main === module) {
    const {Octokit} = require("@octokit/rest");
    const github = new Octokit({auth: process.env["GITHUB_TOKEN"]});
    const core = require("@actions/core");
    main({github, core});
}
