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
function CustomersRequestFromJSON(json) {
    return CustomersRequestFromJSONTyped(json, false);
}
exports.CustomersRequestFromJSON = CustomersRequestFromJSON;
function CustomersRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'pageSize': !runtime_1.exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageNumber': !runtime_1.exists(json, 'pageNumber') ? undefined : json['pageNumber'],
        'sortBy': _1.SortCustomersByFromJSON(json['sortBy']),
        'sortDirection': _1.SortDirectionFromJSON(json['sortDirection']),
        'filters': !runtime_1.exists(json, 'filters') ? undefined : (json['filters'].map(_1.SearchCustomersByFromJSON)),
        'language': _1.LanguageFromJSON(json['language']),
    };
}
exports.CustomersRequestFromJSONTyped = CustomersRequestFromJSONTyped;
function CustomersRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'pageSize': value.pageSize,
        'pageNumber': value.pageNumber,
        'sortBy': _1.SortCustomersByToJSON(value.sortBy),
        'sortDirection': _1.SortDirectionToJSON(value.sortDirection),
        'filters': value.filters === undefined ? undefined : (value.filters.map(_1.SearchCustomersByToJSON)),
        'language': _1.LanguageToJSON(value.language),
    };
}
exports.CustomersRequestToJSON = CustomersRequestToJSON;
