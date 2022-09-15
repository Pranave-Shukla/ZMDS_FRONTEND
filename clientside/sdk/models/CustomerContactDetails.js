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
function CustomerContactDetailsFromJSON(json) {
    return CustomerContactDetailsFromJSONTyped(json, false);
}
exports.CustomerContactDetailsFromJSON = CustomerContactDetailsFromJSON;
function CustomerContactDetailsFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'email': !runtime_1.exists(json, 'email') ? undefined : json['email'],
        'phoneNumber': !runtime_1.exists(json, 'phoneNumber') ? undefined : json['phoneNumber'],
        'searchTerms': !runtime_1.exists(json, 'searchTerms') ? undefined : json['searchTerms'],
    };
}
exports.CustomerContactDetailsFromJSONTyped = CustomerContactDetailsFromJSONTyped;
function CustomerContactDetailsToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'email': value.email,
        'phoneNumber': value.phoneNumber,
        'searchTerms': value.searchTerms,
    };
}
exports.CustomerContactDetailsToJSON = CustomerContactDetailsToJSON;
