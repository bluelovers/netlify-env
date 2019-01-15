import { ITSOverwrite } from 'ts-type';
import { INetlifyHookBodyGitee } from './lib/gitee';
/**
 * Build Environment Variables
 *
 * In addition to the variables you choose to define,
 * Netlify has a number of pre-defined variables built in.
 * Note that the variables listed are automatically set for your builds,
 * and their values are not changeable.
 *
 * These variables are:
 *
 * https://www.netlify.com/docs/continuous-deployment/
 */
export interface INetlifyEnvSource {
    /**
     * URL to the Git repository the build pulls changes from.
     */
    REPOSITORY_URL: string;
    /**
     * Reference to check out after fetching changes from the Git repository.
     */
    BRANCH: string;
    /**
     * Whether the build is from a pull/merge request or not.
     */
    PULL_REQUEST: string;
    /**
     * Name of the head branch received from a Git provider.
     */
    HEAD: string;
    /**
     * Reference of the commit we’re building.
     */
    COMMIT_REF: string;
    /**
     * Name of the context a deploy is built around,
     * it can be production, deploy-preview or branch-deploy.
     */
    CONTEXT: string;
    /**
     * the ID of the pull/merge request and deploy preview (e.g. 1211).
     * These two numbers will always match
     * (deploy-preview-12 is for PR # 12 in your repository).
     */
    REVIEW_ID: string;
    /**
     * This URL represents the main address to your site.
     * It can be either a Netlify subdomain or your own custom domain if you set one;
     * for example, https://example.netlify.com or https://www.example.com.
     */
    URL: string;
    /**
     * This URL represents the unique URL for an individual deploy.
     * It starts with a unique ID that identifies the deploy;
     * for example, https://578ab634d6865d5cf960d620--open-api.netlify.com.
     */
    DEPLOY_URL: string;
    /**
     * This URL represents the primary URL for an individual deploy,
     * or a group of them, like branch deploys and Deploy Previews;
     * for example,
     * https://beta--open-api.netlify.com or https://deploy-preview-34--open-api.netlify.com.
     */
    DEPLOY_PRIME_URL: string;
    /**
     * Title of the incoming webhook.
     */
    INCOMING_HOOK_TITLE: string;
    /**
     * URL of the incoming webhook
     */
    INCOMING_HOOK_URL: string;
    /**
     * INCOMING_HOOK_BODY
     */
    INCOMING_HOOK_BODY: string;
    WEBHOOK_TITLE?: string;
    WEBHOOK_URL?: string;
    WEBHOOK_BODY?: string;
}
export declare type IProcessEnv = typeof process.env | Partial<INetlifyEnvSource>;
export declare type INetlifyEnv<T extends IProcessEnv> = T & INetlifyEnvSource;
export declare type INetlifyEnvParsed<T extends IProcessEnv> = ITSOverwrite<INetlifyEnv<T>, {
    INCOMING_HOOK_BODY_JSON?: INetlifyHookBodyGitee | {
        [key: string]: unknown;
    };
}>;
export declare type INetlifyEnvKey = keyof INetlifyEnvSource;
export declare type INetlifyEnvKeys = INetlifyEnvKey[];
export declare const netlifyEnvKeys: INetlifyEnvKeys;
export declare function getNetlifyEnv<T extends IProcessEnv>(processEnv: T | INetlifyEnv<T>, returnProcessEnv: true): INetlifyEnv<T>;
export declare function getNetlifyEnv<T extends IProcessEnv>(processEnv: T | INetlifyEnv<T>, returnProcessEnv?: false): INetlifyEnvSource;
export declare function getNetlifyEnv<T extends IProcessEnv>(processEnv: T | INetlifyEnv<T>, returnProcessEnv?: boolean): INetlifyEnv<IProcessEnv> | INetlifyEnvSource;
export declare function getNetlifyEnv(returnProcessEnv: true): INetlifyEnv<IProcessEnv>;
export declare function getNetlifyEnv(returnProcessEnv?: false): INetlifyEnvSource;
export declare function getNetlifyEnv(): INetlifyEnvSource;
export declare function getNetlifyEnv(returnProcessEnv?: boolean): INetlifyEnv<IProcessEnv> | INetlifyEnvSource;
export declare function parseNetlifyEnv<T extends IProcessEnv>(processEnv?: T | INetlifyEnv<T>): INetlifyEnvParsed<T & INetlifyEnvSource>;
export default getNetlifyEnv;
