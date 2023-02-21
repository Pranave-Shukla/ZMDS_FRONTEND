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
function ProductDetailsResponseFromJSON(json) {
    return ProductDetailsResponseFromJSONTyped(json, false);
}
exports.ProductDetailsResponseFromJSON = ProductDetailsResponseFromJSON;
function ProductDetailsResponseFromJSONTyped(json, ignoreDiscriminator) {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        'product': !runtime_1.exists(json, 'product') ? undefined : _1.ProductDetailsFromJSON(json['product']),
    };
}
exports.ProductDetailsResponseFromJSONTyped = ProductDetailsResponseFromJSONTyped;
function ProductDetailsResponseToJSON(value) {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        'product': _1.ProductDetailsToJSON(value.product),
    };
}
exports.ProductDetailsResponseToJSON = ProductDetailsResponseToJSON;
