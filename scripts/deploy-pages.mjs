import { execSync } from "node:child_process";

function run(command, options = {}) {
    return execSync(command, {
        stdio: "inherit",
        windowsHide: true,
        ...options,
    });
}

function read(command) {
    try {
        return execSync(command, {
            stdio: ["ignore", "pipe", "ignore"],
            encoding: "utf8",
            windowsHide: true,
        }).trim();
    } catch {
        return "";
    }
}

function resolveRepoUrl() {
    const envRepo = (process.env.GH_PAGES_REPO || "").trim();
    if (envRepo) return envRepo;

    const gitOrigin = read("git config --get remote.origin.url");
    if (gitOrigin) return gitOrigin;

    return "";
}

const repo = resolveRepoUrl();

if (!repo) {
    console.error("Deploy failed: no repository URL found.");
    console.error("Set GH_PAGES_REPO or configure git remote origin.");
    console.error("Example (PowerShell): $env:GH_PAGES_REPO='https://github.com/USER/REPO.git'; npm run deploy");
    process.exit(1);
}

run("npm run build");
run(`npx gh-pages -d dist --repo \"${repo}\"`);
