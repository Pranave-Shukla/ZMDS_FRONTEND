"use strict";
/* tslint:disable */
/* eslint-disable */
/**
 * ZMDS API documentation
 * API documentation
 *
 * The version of the OpenAPI document: 1.0.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 *
 * @export
 * @enum {string}
 */
var RejectionReason;
(function (RejectionReason) {
    RejectionReason["ADDRESS"] = "ADDRESS";
    RejectionReason["NAME"] = "NAME";
    RejectionReason["OTHER"] = "OTHER";
    RejectionReason["REFERENCE"] = "REFERENCE";
})(RejectionReason = exports.RejectionReason || (exports.RejectionReason = {}));
function RejectionReasonFromJSON(json) {
    return RejectionReasonFromJSONTyped(json, false);
}
exports.RejectionReasonFromJSON = RejectionReasonFromJSON;
function RejectionReasonFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.RejectionReasonFromJSONTyped = RejectionReasonFromJSONTyped;
function RejectionReasonToJSON(value) {
    return value;
}
exports.RejectionReasonToJSON = RejectionReasonToJSON;
