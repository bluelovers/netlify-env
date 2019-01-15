/**
 * Created by user on 2019/1/15/015.
 */

import pr1 = require('../../../test/temp/pr1.json');

export { pr1 }

export const a = {
	...pr1
};

export enum EnumNetlifyHookBodyGiteeAction
{
	MERGE = 'merge',
	CREATE = 'create',
}

export enum EnumNetlifyHookBodyGiteePullRequest
{
	MERGED = 'merged',
	OPEN = 'open',
}

export enum EnumNetlifyHookBodyGiteeMergeStatus
{
	CAN_BE_MERGED = 'can_be_merged',
}

export enum EnumNetlifyHookBodyGiteeHookName
{
	MERGE_REQUEST_HOOKS = 'merge_request_hooks',
}

export interface INetlifyHookBodyGiteeWho
{
	"id": number;
	"name": string;
	"email": string;
	"username": string;
	"user_name": string;
	"url": string;
	"login": string;
	"avatar_url": string;
	"html_url": string;
	"type": string;
	"site_admin": boolean;
}

export interface INetlifyHookBodyGiteeWhoLite
{
	"id": number;
	"name": string;
	"email": string;
	"username": string;
	"user_name": string;
	"url": string;
}

export interface INetlifyHookBodyGitee
{
	"action": EnumNetlifyHookBodyGiteeAction | string;
	"pull_request": {
		"id": number;
		"number": number;
		"state": EnumNetlifyHookBodyGiteePullRequest | string;
		"html_url": string;
		"diff_url": string;
		"patch_url": string;
		"title": string;
		"body": string;
		"created_at": string;
		"updated_at": string;
		"closed_at"?: string;
		"merged_at"?: string;
		"merge_commit_sha": string;
		"merge_reference_name": string;
		"user": INetlifyHookBodyGiteeWho;
		"assignee": any;
		"assignees": any[];
		"tester": any;
		"testers": any[];
		"need_test": boolean;
		"need_review": boolean;
		"milestone": any;
		"head": {
			"label": string;
			"ref": string;
			"sha": string;
			"user": INetlifyHookBodyGiteeWho;
			"repo": {
				"id": number;
				"name": string;
				"path": string;
				"full_name": string;
				"owner": INetlifyHookBodyGiteeWho;
				"private": boolean;
				"html_url": string;
				"url": string;
				"description": string;
				"fork": boolean;
				"created_at": string;
				"updated_at": string;
				"pushed_at": string;
				"git_url": string;
				"ssh_url": string;
				"clone_url": string;
				"svn_url": string;
				"git_http_url": string;
				"git_ssh_url": string;
				"git_svn_url": string;
				"homepage": string;
				"stargazers_count": number;
				"watchers_count": number;
				"forks_count": number;
				"language": any;
				"has_issues": boolean;
				"has_wiki": boolean;
				"has_pages": boolean;
				"license": any;
				"open_issues_count": number;
				"default_branch": string;
				"namespace": string;
				"name_with_namespace": string;
				"path_with_namespace": string;
			};
		};
		"base": {
			"label": string;
			"ref": string;
			"sha": string;
			"user": INetlifyHookBodyGiteeWho;
			"repo": {
				"id": number;
				"name": string;
				"path": string;
				"full_name": string;
				"owner": INetlifyHookBodyGiteeWho;
				"private": boolean;
				"html_url": string;
				"url": string;
				"description": string;
				"fork": boolean;
				"created_at": string;
				"updated_at": string;
				"pushed_at": string;
				"git_url": string;
				"ssh_url": string;
				"clone_url": string;
				"svn_url": string;
				"git_http_url": string;
				"git_ssh_url": string;
				"git_svn_url": string;
				"homepage": string;
				"stargazers_count": number;
				"watchers_count": number;
				"forks_count": number;
				"language": any;
				"has_issues": boolean;
				"has_wiki": boolean;
				"has_pages": boolean;
				"license": any;
				"open_issues_count": number;
				"default_branch": string;
				"namespace": string;
				"name_with_namespace": string;
				"path_with_namespace": string;
			};
		};
		"merged": boolean;
		"mergeable": boolean;
		"merge_status": string;
		"updated_by": INetlifyHookBodyGiteeWho;
		"comments": number;
		"commits": number;
		"additions": number;
		"deletions": number;
		"changed_files": number;
	};
	"number": number;
	"iid": number;
	"title": string;
	"body": string;
	"state": EnumNetlifyHookBodyGiteePullRequest | string;
	"merge_status": EnumNetlifyHookBodyGiteeMergeStatus | string;
	"merge_commit_sha": string;
	"url": string;
	"source_branch": string;
	"source_repo": {
		"project": {
			"id": number;
			"name": string;
			"path": string;
			"full_name": string;
			"owner": INetlifyHookBodyGiteeWho;
			"private": boolean;
			"html_url": string;
			"url": string;
			"description": string;
			"fork": boolean;
			"created_at": string;
			"updated_at": string;
			"pushed_at": string;
			"git_url": string;
			"ssh_url": string;
			"clone_url": string;
			"svn_url": string;
			"git_http_url": string;
			"git_ssh_url": string;
			"git_svn_url": string;
			"homepage": string;
			"stargazers_count": number;
			"watchers_count": number;
			"forks_count": number;
			"language": any;
			"has_issues": boolean;
			"has_wiki": boolean;
			"has_pages": boolean;
			"license": any;
			"open_issues_count": number;
			"default_branch": string;
			"namespace": string;
			"name_with_namespace": string;
			"path_with_namespace": string;
		};
		"repository": {
			"id": number;
			"name": string;
			"path": string;
			"full_name": string;
			"owner": {
				"id": number;
				"name": string;
				"email": string;
				"username": string;
				"user_name": string;
				"url": string;
				"login": string;
				"avatar_url": string;
				"html_url": string;
				"type": string;
				"site_admin": boolean;
			};
			"private": boolean;
			"html_url": string;
			"url": string;
			"description": string;
			"fork": boolean;
			"created_at": string;
			"updated_at": string;
			"pushed_at": string;
			"git_url": string;
			"ssh_url": string;
			"clone_url": string;
			"svn_url": string;
			"git_http_url": string;
			"git_ssh_url": string;
			"git_svn_url": string;
			"homepage": string;
			"stargazers_count": number;
			"watchers_count": number;
			"forks_count": number;
			"language": any;
			"has_issues": boolean;
			"has_wiki": boolean;
			"has_pages": boolean;
			"license": any;
			"open_issues_count": number;
			"default_branch": string;
			"namespace": string;
			"name_with_namespace": string;
			"path_with_namespace": string;
		};
	};
	"target_branch": string;
	"target_repo": {
		"project": {
			"id": number;
			"name": string;
			"path": string;
			"full_name": string;
			"owner": INetlifyHookBodyGiteeWho;
			"private": boolean;
			"html_url": string;
			"url": string;
			"description": string;
			"fork": boolean;
			"created_at": string;
			"updated_at": string;
			"pushed_at": string;
			"git_url": string;
			"ssh_url": string;
			"clone_url": string;
			"svn_url": string;
			"git_http_url": string;
			"git_ssh_url": string;
			"git_svn_url": string;
			"homepage": string;
			"stargazers_count": number;
			"watchers_count": number;
			"forks_count": number;
			"language": any;
			"has_issues": boolean;
			"has_wiki": boolean;
			"has_pages": boolean;
			"license": any;
			"open_issues_count": number;
			"default_branch": string;
			"namespace": string;
			"name_with_namespace": string;
			"path_with_namespace": string;
		};
		"repository": {
			"id": number;
			"name": string;
			"path": string;
			"full_name": string;
			"owner": {
				"id": number;
				"name": string;
				"email": string;
				"username": string;
				"user_name": string;
				"url": string;
				"login": string;
				"avatar_url": string;
				"html_url": string;
				"type": string;
				"site_admin": boolean;
			};
			"private": boolean;
			"html_url": string;
			"url": string;
			"description": string;
			"fork": boolean;
			"created_at": string;
			"updated_at": string;
			"pushed_at": string;
			"git_url": string;
			"ssh_url": string;
			"clone_url": string;
			"svn_url": string;
			"git_http_url": string;
			"git_ssh_url": string;
			"git_svn_url": string;
			"homepage": string;
			"stargazers_count": number;
			"watchers_count": number;
			"forks_count": number;
			"language": any;
			"has_issues": boolean;
			"has_wiki": boolean;
			"has_pages": boolean;
			"license": any;
			"open_issues_count": number;
			"default_branch": string;
			"namespace": string;
			"name_with_namespace": string;
			"path_with_namespace": string;
		};
	};
	"project": {
		"id": number;
		"name": string;
		"path": string;
		"full_name": string;
		"owner": INetlifyHookBodyGiteeWho;
		"private": boolean;
		"html_url": string;
		"url": string;
		"description": string;
		"fork": boolean;
		"created_at": string;
		"updated_at": string;
		"pushed_at": string;
		"git_url": string;
		"ssh_url": string;
		"clone_url": string;
		"svn_url": string;
		"git_http_url": string;
		"git_ssh_url": string;
		"git_svn_url": string;
		"homepage": string;
		"stargazers_count": number;
		"watchers_count": number;
		"forks_count": number;
		"language": any;
		"has_issues": boolean;
		"has_wiki": boolean;
		"has_pages": boolean;
		"license": any;
		"open_issues_count": number;
		"default_branch": string;
		"namespace": string;
		"name_with_namespace": string;
		"path_with_namespace": string;
	};
	"repository": {
		"id": number;
		"name": string;
		"path": string;
		"full_name": string;
		"owner": INetlifyHookBodyGiteeWho;
		"private": boolean;
		"html_url": string;
		"url": string;
		"description": string;
		"fork": boolean;
		"created_at": string;
		"updated_at": string;
		"pushed_at": string;
		"git_url": string;
		"ssh_url": string;
		"clone_url": string;
		"svn_url": string;
		"git_http_url": string;
		"git_ssh_url": string;
		"git_svn_url": string;
		"homepage": string;
		"stargazers_count": number;
		"watchers_count": number;
		"forks_count": number;
		"language": any;
		"has_issues": boolean;
		"has_wiki": boolean;
		"has_pages": boolean;
		"license": any;
		"open_issues_count": number;
		"default_branch": string;
		"namespace": string;
		"name_with_namespace": string;
		"path_with_namespace": string;
	};
	"author": INetlifyHookBodyGiteeWho;
	"updated_by": INetlifyHookBodyGiteeWho;
	"sender": INetlifyHookBodyGiteeWho;
	"target_user"?: INetlifyHookBodyGiteeWhoLite;
	"enterprise": any;
	"hook_name": string;
	"password": string;
}
