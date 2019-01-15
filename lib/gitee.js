"use strict";
/**
 * Created by user on 2019/1/15/015.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const pr1 = require("../../../test/temp/pr1.json");
exports.pr1 = pr1;
exports.a = {
    ...pr1
};
var EnumNetlifyHookBodyGiteeAction;
(function (EnumNetlifyHookBodyGiteeAction) {
    EnumNetlifyHookBodyGiteeAction["MERGE"] = "merge";
    EnumNetlifyHookBodyGiteeAction["CREATE"] = "create";
})(EnumNetlifyHookBodyGiteeAction = exports.EnumNetlifyHookBodyGiteeAction || (exports.EnumNetlifyHookBodyGiteeAction = {}));
var EnumNetlifyHookBodyGiteePullRequest;
(function (EnumNetlifyHookBodyGiteePullRequest) {
    EnumNetlifyHookBodyGiteePullRequest["MERGED"] = "merged";
    EnumNetlifyHookBodyGiteePullRequest["OPEN"] = "open";
})(EnumNetlifyHookBodyGiteePullRequest = exports.EnumNetlifyHookBodyGiteePullRequest || (exports.EnumNetlifyHookBodyGiteePullRequest = {}));
var EnumNetlifyHookBodyGiteeMergeStatus;
(function (EnumNetlifyHookBodyGiteeMergeStatus) {
    EnumNetlifyHookBodyGiteeMergeStatus["CAN_BE_MERGED"] = "can_be_merged";
})(EnumNetlifyHookBodyGiteeMergeStatus = exports.EnumNetlifyHookBodyGiteeMergeStatus || (exports.EnumNetlifyHookBodyGiteeMergeStatus = {}));
var EnumNetlifyHookBodyGiteeHookName;
(function (EnumNetlifyHookBodyGiteeHookName) {
    EnumNetlifyHookBodyGiteeHookName["MERGE_REQUEST_HOOKS"] = "merge_request_hooks";
})(EnumNetlifyHookBodyGiteeHookName = exports.EnumNetlifyHookBodyGiteeHookName || (exports.EnumNetlifyHookBodyGiteeHookName = {}));
//# sourceMappingURL=gitee.js.map