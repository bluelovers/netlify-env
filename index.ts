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

	// unknow or old api

	WEBHOOK_TITLE?: string;
	WEBHOOK_URL?: string;
	WEBHOOK_BODY?: string;
}

export type IProcessEnv = typeof process.env | Partial<INetlifyEnvSource>
export type INetlifyEnv<T extends IProcessEnv> = T & INetlifyEnvSource;

export type INetlifyEnvParsed<T extends IProcessEnv> = ITSOverwrite<INetlifyEnv<T>, {
	INCOMING_HOOK_BODY_JSON?: INetlifyHookBodyGitee | {
		[key: string]: unknown,
	}
}>;

export type INetlifyEnvKey = keyof INetlifyEnvSource
export type INetlifyEnvKeys = INetlifyEnvKey[]

export const netlifyEnvKeys: INetlifyEnvKeys = [
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

export function getNetlifyEnv<T extends IProcessEnv>(processEnv: T | INetlifyEnv<T>, returnProcessEnv: true): INetlifyEnv<T>
export function getNetlifyEnv<T extends IProcessEnv>(processEnv: T | INetlifyEnv<T>, returnProcessEnv?: false): INetlifyEnvSource
export function getNetlifyEnv<T extends IProcessEnv>(processEnv: T | INetlifyEnv<T>, returnProcessEnv?: boolean): INetlifyEnv<IProcessEnv> | INetlifyEnvSource
export function getNetlifyEnv(returnProcessEnv: true): INetlifyEnv<IProcessEnv>
export function getNetlifyEnv(returnProcessEnv?: false): INetlifyEnvSource
export function getNetlifyEnv(): INetlifyEnvSource
export function getNetlifyEnv(returnProcessEnv?: boolean): INetlifyEnv<IProcessEnv> | INetlifyEnvSource
export function getNetlifyEnv<T extends IProcessEnv>(processEnv: T | INetlifyEnv<T> | boolean = process.env as T, returnProcessEnv?: boolean)
{
	if (typeof processEnv === 'boolean')
	{
		returnProcessEnv = !!processEnv;
		processEnv = process.env as INetlifyEnv<T>
	}
	else if (typeof processEnv === 'undefined')
	{
		processEnv = process.env as INetlifyEnv<T>
	}

	if (returnProcessEnv)
	{
		return processEnv = {
			...process.env,
		} as INetlifyEnv<T>
	}

	const {
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
	} = processEnv as INetlifyEnv<T>;

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

	let ret: INetlifyEnvSource = {
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

export function parseNetlifyEnv<T extends IProcessEnv>(processEnv?: T | INetlifyEnv<T>): INetlifyEnvParsed<T & INetlifyEnvSource>
{
	// @ts-ignore
	let env = getNetlifyEnv(processEnv, true) as INetlifyEnvParsed<INetlifyEnvSource>;

	try
	{
		env.INCOMING_HOOK_BODY_JSON = JSON.parse(env.INCOMING_HOOK_BODY) || {};
	}
	catch (e)
	{
		env.INCOMING_HOOK_BODY_JSON = {};
		console.warn((e as Error).message);
	}

	return env;
}

export default getNetlifyEnv
