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

/**
 * 
 * @export
 * @enum {string}
 */
export enum SortDirection {
    ASC = 'ASC',
    DESC = 'DESC'
}

export function SortDirectionFromJSON(json: any): SortDirection {
    return SortDirectionFromJSONTyped(json, false);
}

export function SortDirectionFromJSONTyped(json: any, ignoreDiscriminator: boolean): SortDirection {
    return json as SortDirection;
}

export function SortDirectionToJSON(value?: SortDirection | null): any {
    return value as any;
}

