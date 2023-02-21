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
function AuthenticatedUserResponseFromJSON(json) {
    return AuthenticatedUserResponseFromJSONTyped(json, false);
}
exports.AuthenticatedUserResponseFromJSON = AuthenticatedUserResponseFromJSON;
function AuthenticatedUserResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'user': !runtime_1.exists(json, 'user') ? undefined : _1.UserFromJSON(json['user']),
    };
}
exports.AuthenticatedUserResponseFromJSONTyped = AuthenticatedUserResponseFromJSONTyped;
function AuthenticatedUserResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'user': _1.UserToJSON(value.user),
    };
}
exports.AuthenticatedUserResponseToJSON = AuthenticatedUserResponseToJSON;
