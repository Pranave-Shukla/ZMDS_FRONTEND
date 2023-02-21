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
import { Language, SearchProductsBy, SortDirection, SortProductsBy } from './';
/**
 *
 * @export
 * @interface ProductsRequest
 */
export interface ProductsRequest {
    /**
     *
     * @type {number}
     * @memberof ProductsRequest
     */
    pageSize?: number;
    /**
     *
     * @type {number}
     * @memberof ProductsRequest
     */
    pageNumber?: number;
    /**
     *
     * @type {SortProductsBy}
     * @memberof ProductsRequest
     */
    sortBy: SortProductsBy;
    /**
     *
     * @type {SortDirection}
     * @memberof ProductsRequest
     */
    sortDirection: SortDirection;
    /**
     *
     * @type {Array<SearchProductsBy>}
     * @memberof ProductsRequest
     */
    filters?: Array<SearchProductsBy>;
    /**
     *
     * @type {Language}
     * @memberof ProductsRequest
     */
    language: Language;
}
export declare function ProductsRequestFromJSON(json: any): ProductsRequest;
export declare function ProductsRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): ProductsRequest;
export declare function ProductsRequestToJSON(value?: ProductsRequest | null): any;