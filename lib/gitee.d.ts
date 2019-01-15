export declare enum EnumNetlifyHookBodyGiteeAction {
    MERGE = "merge",
    CREATE = "create"
}
export declare enum EnumNetlifyHookBodyGiteePullRequestStatus {
    MERGED = "merged",
    OPEN = "open"
}
export declare enum EnumNetlifyHookBodyGiteeMergeStatus {
    CAN_BE_MERGED = "can_be_merged"
}
export declare enum EnumNetlifyHookBodyGiteeHookName {
    MERGE_REQUEST_HOOKS = "merge_request_hooks"
}
export interface INetlifyHookBodyGiteeWho {
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
export interface INetlifyHookBodyGiteeWhoLite {
    "id": number;
    "name": string;
    "email": string;
    "username": string;
    "user_name": string;
    "url": string;
}
export interface INetlifyHookBodyGiteeRepo {
    "project": INetlifyHookBodyGiteeRepoItem;
    "repository": INetlifyHookBodyGiteeRepoItem;
}
export interface INetlifyHookBodyGiteeRepoItem {
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
}
export interface INetlifyHookBodyGiteeHeadBase {
    "label": string;
    "ref": string;
    "sha": string;
    "user": INetlifyHookBodyGiteeWho;
    "repo": INetlifyHookBodyGiteeRepoItem;
}
export interface INetlifyHookBodyGitee {
    "action": EnumNetlifyHookBodyGiteeAction | string;
    "pull_request": {
        "id": number;
        "number": number;
        "state": EnumNetlifyHookBodyGiteePullRequestStatus | string;
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
        "head": INetlifyHookBodyGiteeHeadBase;
        "base": INetlifyHookBodyGiteeHeadBase;
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
    "state": EnumNetlifyHookBodyGiteePullRequestStatus | string;
    "merge_status": EnumNetlifyHookBodyGiteeMergeStatus | string;
    "merge_commit_sha": string;
    "url": string;
    "source_branch": string;
    "source_repo": INetlifyHookBodyGiteeRepo;
    "target_branch": string;
    "target_repo": INetlifyHookBodyGiteeRepo;
    "project": INetlifyHookBodyGiteeRepoItem;
    "repository": INetlifyHookBodyGiteeRepoItem;
    "author": INetlifyHookBodyGiteeWho;
    "updated_by": INetlifyHookBodyGiteeWho;
    "sender": INetlifyHookBodyGiteeWho;
    "target_user"?: INetlifyHookBodyGiteeWhoLite;
    "enterprise": any;
    "hook_name": EnumNetlifyHookBodyGiteeHookName | string;
    "password": string;
}
