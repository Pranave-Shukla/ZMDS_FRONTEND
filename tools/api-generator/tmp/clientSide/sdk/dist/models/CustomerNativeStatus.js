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
var CustomerNativeStatus;
(function (CustomerNativeStatus) {
    CustomerNativeStatus["INREVIEW"] = "IN_REVIEW";
    CustomerNativeStatus["VALIDATED"] = "VALIDATED";
    CustomerNativeStatus["BLOCKED"] = "BLOCKED";
})(CustomerNativeStatus = exports.CustomerNativeStatus || (exports.CustomerNativeStatus = {}));
function CustomerNativeStatusFromJSON(json) {
    return CustomerNativeStatusFromJSONTyped(json, false);
}
exports.CustomerNativeStatusFromJSON = CustomerNativeStatusFromJSON;
function CustomerNativeStatusFromJSONTyped(json, ignoreDiscriminator) {
    return json;
}
exports.CustomerNativeStatusFromJSONTyped = CustomerNativeStatusFromJSONTyped;
function CustomerNativeStatusToJSON(value) {
    return value;
}
exports.CustomerNativeStatusToJSON = CustomerNativeStatusToJSON;