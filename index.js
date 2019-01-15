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