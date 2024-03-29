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
var runtime_1 = require("../runtime");
var _1 = require("./");
function LocalizedCustomerTypeFromJSON(json) {
    return LocalizedCustomerTypeFromJSONTyped(json, false);
}
exports.LocalizedCustomerTypeFromJSON = LocalizedCustomerTypeFromJSON;
function LocalizedCustomerTypeFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'type': !runtime_1.exists(json, 'type') ? undefined : _1.CustomerTypeFromJSON(json['type']),
        'localizedType': !runtime_1.exists(json, 'localizedType') ? undefined : json['localizedType'],
    };
}
exports.LocalizedCustomerTypeFromJSONTyped = LocalizedCustomerTypeFromJSONTyped;
function LocalizedCustomerTypeToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'type': _1.CustomerTypeToJSON(value.type),
        'localizedType': value.localizedType,
    };
}
exports.LocalizedCustomerTypeToJSON = LocalizedCustomerTypeToJSON;
