####################################################
## CONFIGURABLE OPTIONS
$RELEASE_BRANCH = "master"
$NIGHTLY_ZIP = "nightly.zip"
$CRYSTAL_SOURCE_DIR = "crystal-lang"
$CRYSTAL_NIGHTLY_DIR = "lib"
$CRYSTAL_NIGHTLY_SCOOP_DIR = "$env:USERPROFILE\scoop\apps\crystal-nightly\current"
####################################################
$WINDOWS_WORKFLOW_ID = 461450
$CRYSTAL_GITHUB_API_ENDPOINT = "https://api.github.com/repos/crystal-lang/crystal"
$CRYSTAL_NIGHTLY_ENDPOINT = "https://nightly.link/crystal-lang/crystal/actions/runs"
$GITHUB_HEADERS = @{ 
                     "Accept" = "application/vnd.github.v3+json";
                     "user-agent" = "powershell" }

$windows_workflow = Invoke-RestMethod -Uri "$CRYSTAL_GITHUB_API_ENDPOINT/actions/workflows/$WINDOWS_WORKFLOW_ID/runs?status=success&event=push&branch=$RELEASE_BRANCH&per_page=1" -Headers $GITHUB_HEADERS
$run_id = $windows_workflow.workflow_runs.id 
$commit_hash = $windows_workflow.workflow_runs.head_sha

function Print-ReleaseVersion {
    "Crystal source commit hash: $commit_hash"
    "Nightly run ID: $run_id"
}

pushd $CRYSTAL_NIGHTLY_SCOOP_DIR

if(!(Test-Path $CRYSTAL_SOURCE_DIR)) {
    git clone "https://github.com/crystal-lang/crystal" crystal-lang
}
else
{
    pushd $CRYSTAL_SOURCE_DIR
    $current_head = git.exe rev-parse HEAD
    if($current_head -like $commit_hash) {
        Print-ReleaseVersion
        "You are already on the latest nightly release."
        return
    }
    popd
}

pushd $CRYSTAL_SOURCE_DIR
git fetch origin master
git checkout $commit_hash -q
popd

if(!(Test-Path $CRYSTAL_NIGHTLY_DIR)) {
    mkdir $CRYSTAL_NIGHTLY_DIR | Out-Null
}

pushd $CRYSTAL_NIGHTLY_DIR

if(Test-Path $NIGHTLY_ZIP) {
    rm $NIGHTLY_ZIP | Out-Null
}

"Downloading matching nightly binaries..."
Invoke-WebRequest -Uri "$CRYSTAL_NIGHTLY_ENDPOINT/$run_id/crystal.zip" -OutFile "nightly.zip"

"Extracting binaries..."
7z.exe x -aoa nightly.zip | Out-Null

Print-ReleaseVersion
"Successfully acquired latest Crystal nightly release."
popd