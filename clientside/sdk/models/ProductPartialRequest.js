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
var _1 = require("./");
function ProductPartialRequestFromJSON(json) {
    return ProductPartialRequestFromJSONTyped(json, false);
}
exports.ProductPartialRequestFromJSON = ProductPartialRequestFromJSON;
function ProductPartialRequestFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'productPartial': _1.ProductPartialFromJSON(json['productPartial']),
    };
}
exports.ProductPartialRequestFromJSONTyped = ProductPartialRequestFromJSONTyped;
function ProductPartialRequestToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'productPartial': _1.ProductPartialToJSON(value.productPartial),
    };
}
exports.ProductPartialRequestToJSON = ProductPartialRequestToJSON;
