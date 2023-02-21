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
/**
 * 
 * @export
 * @interface PageInfo
 */
export interface PageInfo {
    /**
     * 
     * @type {number}
     * @memberof PageInfo
     */
    pageNumber?: number;
    /**
     * 
     * @type {number}
     * @memberof PageInfo
     */
    totalElements?: number;
    /**
     * 
     * @type {number}
     * @memberof PageInfo
     */
    totalPages?: number;
}

export function PageInfoFromJSON(json: any): PageInfo {
    return PageInfoFromJSONTyped(json, false);
}

export function PageInfoFromJSONTyped(json: any, ignoreDiscriminator: boolean): PageInfo {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pageNumber': !exists(json, 'pageNumber') ? undefined : json['pageNumber'],
        'totalElements': !exists(json, 'totalElements') ? undefined : json['totalElements'],
        'totalPages': !exists(json, 'totalPages') ? undefined : json['totalPages'],
    };
}

export function PageInfoToJSON(value?: PageInfo | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pageNumber': value.pageNumber,
        'totalElements': value.totalElements,
        'totalPages': value.totalPages,
    };
}


