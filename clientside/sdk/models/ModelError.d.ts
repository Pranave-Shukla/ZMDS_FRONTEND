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
import { ErrorCode } from './';
/**
 *
 * @export
 * @interface ModelError
 */
export interface ModelError {
    /**
     *
     * @type {Date}
     * @memberof ModelError
     */
    date: Date;
    /**
     *
     * @type {ErrorCode}
     * @memberof ModelError
     */
    code: ErrorCode;
    /**
     *
     * @type {string}
     * @memberof ModelError
     */
    message: string;
}
export declare function ModelErrorFromJSON(json: any): ModelError;
export declare function ModelErrorFromJSONTyped(json: any, ignoreDiscriminator: boolean): ModelError;
export declare function ModelErrorToJSON(value?: ModelError | null): any;