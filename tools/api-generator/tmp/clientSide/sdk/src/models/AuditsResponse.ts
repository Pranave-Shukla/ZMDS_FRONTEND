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
    Audit,
    AuditFromJSON,
    AuditFromJSONTyped,
    AuditToJSON,
    PageInfo,
    PageInfoFromJSON,
    PageInfoFromJSONTyped,
    PageInfoToJSON,
} from './';

/**
 * 
 * @export
 * @interface AuditsResponse
 */
export interface AuditsResponse {
    /**
     * 
     * @type {PageInfo}
     * @memberof AuditsResponse
     */
    pageInfo?: PageInfo;
    /**
     * 
     * @type {Array<Audit>}
     * @memberof AuditsResponse
     */
    audits?: Array<Audit>;
}

export function AuditsResponseFromJSON(json: any): AuditsResponse {
    return AuditsResponseFromJSONTyped(json, false);
}

export function AuditsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuditsResponse {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'pageInfo': !exists(json, 'pageInfo') ? undefined : PageInfoFromJSON(json['pageInfo']),
        'audits': !exists(json, 'audits') ? undefined : ((json['audits'] as Array<any>).map(AuditFromJSON)),
    };
}

export function AuditsResponseToJSON(value?: AuditsResponse | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'pageInfo': PageInfoToJSON(value.pageInfo),
        'audits': value.audits === undefined ? undefined : ((value.audits as Array<any>).map(AuditToJSON)),
    };
}


