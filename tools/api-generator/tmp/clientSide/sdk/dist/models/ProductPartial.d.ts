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
import { NullableBooleanValue, NullableProductAvailability } from './';
/**
 *
 * @export
 * @interface ProductPartial
 */
export interface ProductPartial {
    /**
     *
     * @type {NullableBooleanValue}
     * @memberof ProductPartial
     */
    isVisible?: NullableBooleanValue | null;
    /**
     *
     * @type {NullableProductAvailability}
     * @memberof ProductPartial
     */
    availability?: NullableProductAvailability | null;
    /**
     *
     * @type {number}
     * @memberof ProductPartial
     */
    minimumOrderQuantity?: number | null;
    /**
     *
     * @type {number}
     * @memberof ProductPartial
     */
    maximumOrderQuantity?: number | null;
    /**
     *
     * @type {string}
     * @memberof ProductPartial
     */
    associatedProducts?: string | null;
    /**
     *
     * @type {string}
     * @memberof ProductPartial
     */
    image?: string | null;
    /**
     *
     * @type {string}
     * @memberof ProductPartial
     */
    imageFilename?: string | null;
}
export declare function ProductPartialFromJSON(json: any): ProductPartial;
export declare function ProductPartialFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductPartial;
export declare function ProductPartialToJSON(value?: ProductPartial | null): any;
