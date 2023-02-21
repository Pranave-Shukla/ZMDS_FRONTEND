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
export declare enum SortCustomersBy {
    NATIVESTATUS = "NATIVE_STATUS",
    ERPID = "ERP_ID",
    COMPANYNAME = "COMPANY_NAME",
    ADDRESS = "ADDRESS",
    STATE = "STATE",
    TYPE = "TYPE",
    NATIVECREATEDDATE = "NATIVE_CREATED_DATE",
    SOURCE = "SOURCE",
    REJECTIONREASON = "REJECTION_REASON"
}
export declare function SortCustomersByFromJSON(json: any): SortCustomersBy;
export declare function SortCustomersByFromJSONTyped(json: any, ignoreDiscriminator: boolean): SortCustomersBy;
export declare function SortCustomersByToJSON(value?: SortCustomersBy | null): any;