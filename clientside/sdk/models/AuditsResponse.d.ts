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
import { Audit, PageInfo } from './';
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
export declare function AuditsResponseFromJSON(json: any): AuditsResponse;
export declare function AuditsResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): AuditsResponse;
export declare function AuditsResponseToJSON(value?: AuditsResponse | null): any;
