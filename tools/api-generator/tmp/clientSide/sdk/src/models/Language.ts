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
export enum Language {
    DE = 'DE'
}

export function LanguageFromJSON(json: any): Language {
    return LanguageFromJSONTyped(json, false);
}

export function LanguageFromJSONTyped(json: any, ignoreDiscriminator: boolean): Language {
    return json as Language;
}

export function LanguageToJSON(value?: Language | null): any {
    return value as any;
}

