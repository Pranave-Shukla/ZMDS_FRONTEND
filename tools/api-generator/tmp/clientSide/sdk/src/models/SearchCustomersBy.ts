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
    SearchByOperation,
    SearchByOperationFromJSON,
    SearchByOperationFromJSONTyped,
    SearchByOperationToJSON,
    SearchCustomersByField,
    SearchCustomersByFieldFromJSON,
    SearchCustomersByFieldFromJSONTyped,
    SearchCustomersByFieldToJSON,
} from './';

/**
 * 
 * @export
 * @interface SearchCustomersBy
 */
export interface SearchCustomersBy {
    /**
     * 
     * @type {SearchCustomersByField}
     * @memberof SearchCustomersBy
     */
    field?: SearchCustomersByField;
    /**
     * 
     * @type {SearchByOperation}
     * @memberof SearchCustomersBy
     */
    operation?: SearchByOperation;
    /**
     * 
     * @type {Array<string>}
     * @memberof SearchCustomersBy
     */
    values?: Array<string>;
}

export function SearchCustomersByFromJSON(json: any): SearchCustomersBy {
    return SearchCustomersByFromJSONTyped(json, false);
}

export function SearchCustomersByFromJSONTyped(json: any, ignoreDiscriminator: boolean): SearchCustomersBy {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'field': !exists(json, 'field') ? undefined : SearchCustomersByFieldFromJSON(json['field']),
        'operation': !exists(json, 'operation') ? undefined : SearchByOperationFromJSON(json['operation']),
        'values': !exists(json, 'values') ? undefined : json['values'],
    };
}

export function SearchCustomersByToJSON(value?: SearchCustomersBy | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'field': SearchCustomersByFieldToJSON(value.field),
        'operation': SearchByOperationToJSON(value.operation),
        'values': value.values,
    };
}


