"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.netlifyEnvKeys = [
    'REPOSITORY_URL',
    'BRANCH',
    'PULL_REQUEST',
    'HEAD',
    'COMMIT_REF',
    'CONTEXT',
    'REVIEW_ID',
    'URL',
    'DEPLOY_URL',
    'DEPLOY_PRIME_URL',
    'INCOMING_HOOK_TITLE',
    'INCOMING_HOOK_URL',
    'INCOMING_HOOK_BODY',
    'WEBHOOK_TITLE',
    'WEBHOOK_URL',
    'WEBHOOK_BODY',
];
function getNetlifyEnv(processEnv = process.env, returnProcessEnv) {
    if (typeof processEnv === 'boolean') {
        returnProcessEnv = !!processEnv;
        processEnv = process.env;
    }
    else if (typeof processEnv === 'undefined') {
        processEnv = process.env;
    }
    if (returnProcessEnv) {
        return processEnv = {
            ...process.env,
        };
    }
    const { REPOSITORY_URL, BRANCH, PULL_REQUEST, HEAD, COMMIT_REF, CONTEXT, REVIEW_ID, URL, DEPLOY_URL, DEPLOY_PRIME_URL, INCOMING_HOOK_TITLE, INCOMING_HOOK_URL, INCOMING_HOOK_BODY, WEBHOOK_TITLE, WEBHOOK_URL, WEBHOOK_BODY, } = processEnv;
    /*
    const DEPLOY_PREVIEW = DEPLOY_PRIME_URL && DEPLOY_PRIME_URL.includes('deploy-preview');

    let GITHUB_URL: string;
    if (REPOSITORY_URL)
    {
        const githubPattern = /git@github\.com:([a-zA-Z0-9-]{1,39})\/([a-zA-Z0-9_.-]+)/;
        const githubMatches = githubPattern.exec(REPOSITORY_URL);
        if (githubMatches)
        {
            GITHUB_URL = `https://github.com/${githubMatches[1]}/${githubMatches[2]}`;
        }
    }
    */
    /*
    let DEPLOY_PREVIEW_PR_NUMBER: number;
    let DEPLOY_PREVIEW_PR_URL: string;
    if (DEPLOY_PREVIEW)
    {
        const previewPattern = /https:\/\/deploy-preview-([0-9]+)--/;
        DEPLOY_PREVIEW_PR_NUMBER = parseInt(previewPattern.exec(DEPLOY_PRIME_URL)[1]);
        DEPLOY_PREVIEW_PR_URL = `${GITHUB_URL}/pull/${DEPLOY_PREVIEW_PR_NUMBER}`;
    }
    */
    let ret = {
        REPOSITORY_URL,
        BRANCH,
        PULL_REQUEST,
        HEAD,
        COMMIT_REF,
        CONTEXT,
        REVIEW_ID,
        URL,
        DEPLOY_URL,
        DEPLOY_PRIME_URL,
        INCOMING_HOOK_TITLE,
        INCOMING_HOOK_URL,
        INCOMING_HOOK_BODY,
        WEBHOOK_TITLE,
        WEBHOOK_URL,
        WEBHOOK_BODY,
    };
    return ret;
}
exports.getNetlifyEnv = getNetlifyEnv;
function parseNetlifyEnv(processEnv) {
    // @ts-ignore
    let env = getNetlifyEnv(processEnv, true);
    try {
        env.INCOMING_HOOK_BODY_JSON = JSON.parse(env.INCOMING_HOOK_BODY) || {};
    }
    catch (e) {
        env.INCOMING_HOOK_BODY_JSON = {};
        console.warn(e.message);
    }
    return env;
}
exports.parseNetlifyEnv = parseNetlifyEnv;
exports.default = getNetlifyEnv;
//# sourceMappingURL=index.js.map