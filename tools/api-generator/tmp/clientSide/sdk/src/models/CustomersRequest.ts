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

import { exists, mapValues } from '../runtime';
import {
    Language,
    LanguageFromJSON,
    LanguageFromJSONTyped,
    LanguageToJSON,
    SearchCustomersBy,
    SearchCustomersByFromJSON,
    SearchCustomersByFromJSONTyped,
    SearchCustomersByToJSON,
    SortCustomersBy,
    SortCustomersByFromJSON,
    SortCustomersByFromJSONTyped,
    SortCustomersByToJSON,
    SortDirection,
    SortDirectionFromJSON,
    SortDirectionFromJSONTyped,
    SortDirectionToJSON,
} from './';

/**
 * 
 * @export
 * @interface CustomersRequest
 */
export interface CustomersRequest {
    /**
     * 
     * @type {number}
     * @memberof CustomersRequest
     */
    pageSize?: number;
    /**
     * 
     * @type {number}
     * @memberof CustomersRequest
     */
    pageNumber?: number;
    /**
     * 
     * @type {SortCustomersBy}
     * @memberof CustomersRequest
     */
    sortBy: SortCustomersBy;
    /**
     * 
     * @type {SortDirection}
     * @memberof CustomersRequest
     */
    sortDirection: SortDirection;
    /**
     * 
     * @type {Array<SearchCustomersBy>}
     * @memberof CustomersRequest
     */
    filters?: Array<SearchCustomersBy>;
    /**
     * 
     * @type {Language}
     * @memberof CustomersRequest
     */
    language: Language;
}

export function CustomersRequestFromJSON(json: any): CustomersRequest {
    return CustomersRequestFromJSONTyped(json, false);
}

export function CustomersRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): CustomersRequest {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pageSize': !exists(json, 'pageSize') ? undefined : json['pageSize'],
        'pageNumber': !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
        'sortBy': SortCustomersByFromJSON(json['sortBy']),
        'sortDirection': SortDirectionFromJSON(json['sortDirection']),
        'filters': !exists(json, 'filters') ? undefined : ((json['filters'] as Array<any>).map(SearchCustomersByFromJSON)),
        'language': LanguageFromJSON(json['language']),
    };
}

export function CustomersRequestToJSON(value?: CustomersRequest | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pageSize': value.pageSize,
        'pageNumber': value.pageNumber,
        'sortBy': SortCustomersByToJSON(value.sortBy),
        'sortDirection': SortDirectionToJSON(value.sortDirection),
        'filters': value.filters === undefined ? undefined : ((value.filters as Array<any>).map(SearchCustomersByToJSON)),
        'language': LanguageToJSON(value.language),
    };
}


