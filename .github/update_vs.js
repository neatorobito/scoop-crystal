const fs = require("fs").promises;
const crypto = require("crypto");
const { https } = require('follow-redirects');

async function main() {
    const urls = [
        "https://aka.ms/vs/17/release/vs_BuildTools.exe",
    ];

    const data = JSON.parse(await fs.readFile("bucket/vs_2022_cpp_build_tools.json", "utf8"));
    const new_data = {
        ...data,
    };

    if(data["hash"])
    {
        const hashes = await Promise.all(urls.map(hash_url));
        if(data["hash"] !== hashes[0]) {
            new_data["hash"] = hashes[0]
            await fs.writeFile("bucket/vs_2022_cpp_build_tools.json", JSON.stringify(new_data, null, 4) + "\n", "utf8");
        }
    }
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
    main();
}
