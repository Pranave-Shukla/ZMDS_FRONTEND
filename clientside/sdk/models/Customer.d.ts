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
import { CustomerNativeStatus, CustomerState, CustomerType, RejectionReason, SourceSystem } from './';
/**
 *
 * @export
 * @interface Customer
 */
export interface Customer {
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    id?: string;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    erpId?: string;
    /**
     *
     * @type {CustomerType}
     * @memberof Customer
     */
    type?: CustomerType;
    /**
     *
     * @type {CustomerNativeStatus}
     * @memberof Customer
     */
    nativeStatus?: CustomerNativeStatus;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    companyName?: string;
    /**
     *
     * @type {string}
     * @memberof Customer
     */
    address?: string;
    /**
     *
     * @type {CustomerState}
     * @memberof Customer
     */
    state?: CustomerState;
    /**
     *
     * @type {Date}
     * @memberof Customer
     */
    nativeCreatedDate?: Date;
    /**
     *
     * @type {SourceSystem}
     * @memberof Customer
     */
    sourceSystem?: SourceSystem;
    /**
     *
     * @type {RejectionReason}
     * @memberof Customer
     */
    rejectionReason?: RejectionReason;
}
export declare function CustomerFromJSON(json: any): Customer;
export declare function CustomerFromJSONTyped(json: any, ignoreDiscriminator: boolean): Customer;
export declare function CustomerToJSON(value?: Customer | null): any;
