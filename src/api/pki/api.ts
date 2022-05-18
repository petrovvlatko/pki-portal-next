/* tslint:disable */
/* eslint-disable */
/**
 * PKI Service
 * Go microservice for PKI management. Provides an wrapper above the sectigo API.
 *
 * The version of the OpenAPI document: 2.0
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */


import { Configuration } from './configuration';
import globalAxios, { AxiosPromise, AxiosInstance, AxiosRequestConfig } from 'axios';
// Some imports not used depending on template conditions
// @ts-ignore
import { DUMMY_BASE_URL, assertParamExists, setApiKeyToObject, setBasicAuthToObject, setBearerAuthToObject, setOAuthToObject, setSearchParams, serializeDataIfNeeded, toPathString, createRequestFunction } from './common';
// @ts-ignore
import { BASE_PATH, COLLECTION_FORMATS, RequestArgs, BaseAPI, RequiredError } from './base';

/**
 * 
 * @export
 * @interface EchoHTTPError
 */
export interface EchoHTTPError {
    /**
     * 
     * @type {any}
     * @memberof EchoHTTPError
     */
    'message'?: any;
}
/**
 * 
 * @export
 * @interface ModelCsrRequest
 */
export interface ModelCsrRequest {
    /**
     * 
     * @type {string}
     * @memberof ModelCsrRequest
     */
    'csr': string;
}
/**
 * 
 * @export
 * @interface ModelRevokeRequest
 */
export interface ModelRevokeRequest {
    /**
     * 
     * @type {string}
     * @memberof ModelRevokeRequest
     */
    'reason': string;
    /**
     * 
     * @type {string}
     * @memberof ModelRevokeRequest
     */
    'serial': string;
}
/**
 * 
 * @export
 * @interface PortalApisListSmimeResponseCertificateDetails
 */
export interface PortalApisListSmimeResponseCertificateDetails {
    /**
     * 
     * @type {TimestamppbTimestamp}
     * @memberof PortalApisListSmimeResponseCertificateDetails
     */
    'expires'?: TimestamppbTimestamp;
    /**
     * 
     * @type {number}
     * @memberof PortalApisListSmimeResponseCertificateDetails
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PortalApisListSmimeResponseCertificateDetails
     */
    'serial'?: string;
    /**
     * 
     * @type {string}
     * @memberof PortalApisListSmimeResponseCertificateDetails
     */
    'status'?: string;
}
/**
 * 
 * @export
 * @interface PortalApisSslCertificateDetails
 */
export interface PortalApisSslCertificateDetails {
    /**
     * 
     * @type {string}
     * @memberof PortalApisSslCertificateDetails
     */
    'common_name'?: string;
    /**
     * 
     * @type {TimestamppbTimestamp}
     * @memberof PortalApisSslCertificateDetails
     */
    'created'?: TimestamppbTimestamp;
    /**
     * 
     * @type {TimestamppbTimestamp}
     * @memberof PortalApisSslCertificateDetails
     */
    'expires'?: TimestamppbTimestamp;
    /**
     * 
     * @type {number}
     * @memberof PortalApisSslCertificateDetails
     */
    'id'?: number;
    /**
     * 
     * @type {string}
     * @memberof PortalApisSslCertificateDetails
     */
    'issued_by'?: string;
    /**
     * 
     * @type {TimestamppbTimestamp}
     * @memberof PortalApisSslCertificateDetails
     */
    'not_before'?: TimestamppbTimestamp;
    /**
     * 
     * @type {string}
     * @memberof PortalApisSslCertificateDetails
     */
    'serial'?: string;
    /**
     * 
     * @type {string}
     * @memberof PortalApisSslCertificateDetails
     */
    'status'?: string;
    /**
     * 
     * @type {Array<string>}
     * @memberof PortalApisSslCertificateDetails
     */
    'subject_alternative_names'?: Array<string>;
}
/**
 * 
 * @export
 * @interface TimestamppbTimestamp
 */
export interface TimestamppbTimestamp {
    /**
     * Non-negative fractions of a second at nanosecond resolution. Negative second values with fractions must still have non-negative nanos values that count forward in time. Must be from 0 to 999,999,999 inclusive.
     * @type {number}
     * @memberof TimestamppbTimestamp
     */
    'nanos'?: number;
    /**
     * Represents seconds of UTC time since Unix epoch 1970-01-01T00:00:00Z. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.
     * @type {number}
     * @memberof TimestamppbTimestamp
     */
    'seconds'?: number;
}

/**
 * SMIMEApi - axios parameter creator
 * @export
 */
export const SMIMEApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * This endpoint handles a provided CSR. The validity of the CSR is checked and passed to the sectigo server in combination with the basic user information extracted from the JWT. The server uses his own configuration, so the profile and the lifetime of the certificate can not be modified. Afterwards the new certificate is returned as X509 certificate.
         * @summary SMIME CSR Endpoint
         * @param {ModelCsrRequest} modelCsrRequest The CSR
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smimeCsrPost: async (modelCsrRequest: ModelCsrRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelCsrRequest' is not null or undefined
            assertParamExists('smimeCsrPost', 'modelCsrRequest', modelCsrRequest)
            const localVarPath = `/smime/csr`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(modelCsrRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary SMIME List Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smimeGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/smime/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary SMIME Revoke Endpoint
         * @param {ModelRevokeRequest} modelRevokeRequest The serial of the certificate to revoke and the reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smimeRevokePost: async (modelRevokeRequest: ModelRevokeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelRevokeRequest' is not null or undefined
            assertParamExists('smimeRevokePost', 'modelRevokeRequest', modelRevokeRequest)
            const localVarPath = `/smime/revoke`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(modelRevokeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SMIMEApi - functional programming interface
 * @export
 */
export const SMIMEApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SMIMEApiAxiosParamCreator(configuration)
    return {
        /**
         * This endpoint handles a provided CSR. The validity of the CSR is checked and passed to the sectigo server in combination with the basic user information extracted from the JWT. The server uses his own configuration, so the profile and the lifetime of the certificate can not be modified. Afterwards the new certificate is returned as X509 certificate.
         * @summary SMIME CSR Endpoint
         * @param {ModelCsrRequest} modelCsrRequest The CSR
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async smimeCsrPost(modelCsrRequest: ModelCsrRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.smimeCsrPost(modelCsrRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary SMIME List Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async smimeGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PortalApisListSmimeResponseCertificateDetails>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.smimeGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary SMIME Revoke Endpoint
         * @param {ModelRevokeRequest} modelRevokeRequest The serial of the certificate to revoke and the reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async smimeRevokePost(modelRevokeRequest: ModelRevokeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.smimeRevokePost(modelRevokeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SMIMEApi - factory interface
 * @export
 */
export const SMIMEApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SMIMEApiFp(configuration)
    return {
        /**
         * This endpoint handles a provided CSR. The validity of the CSR is checked and passed to the sectigo server in combination with the basic user information extracted from the JWT. The server uses his own configuration, so the profile and the lifetime of the certificate can not be modified. Afterwards the new certificate is returned as X509 certificate.
         * @summary SMIME CSR Endpoint
         * @param {ModelCsrRequest} modelCsrRequest The CSR
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smimeCsrPost(modelCsrRequest: ModelCsrRequest, options?: any): AxiosPromise<string> {
            return localVarFp.smimeCsrPost(modelCsrRequest, options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary SMIME List Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smimeGet(options?: any): AxiosPromise<Array<PortalApisListSmimeResponseCertificateDetails>> {
            return localVarFp.smimeGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary SMIME Revoke Endpoint
         * @param {ModelRevokeRequest} modelRevokeRequest The serial of the certificate to revoke and the reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        smimeRevokePost(modelRevokeRequest: ModelRevokeRequest, options?: any): AxiosPromise<void> {
            return localVarFp.smimeRevokePost(modelRevokeRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SMIMEApi - object-oriented interface
 * @export
 * @class SMIMEApi
 * @extends {BaseAPI}
 */
export class SMIMEApi extends BaseAPI {
    /**
     * This endpoint handles a provided CSR. The validity of the CSR is checked and passed to the sectigo server in combination with the basic user information extracted from the JWT. The server uses his own configuration, so the profile and the lifetime of the certificate can not be modified. Afterwards the new certificate is returned as X509 certificate.
     * @summary SMIME CSR Endpoint
     * @param {ModelCsrRequest} modelCsrRequest The CSR
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SMIMEApi
     */
    public smimeCsrPost(modelCsrRequest: ModelCsrRequest, options?: AxiosRequestConfig) {
        return SMIMEApiFp(this.configuration).smimeCsrPost(modelCsrRequest, options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary SMIME List Endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SMIMEApi
     */
    public smimeGet(options?: AxiosRequestConfig) {
        return SMIMEApiFp(this.configuration).smimeGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary SMIME Revoke Endpoint
     * @param {ModelRevokeRequest} modelRevokeRequest The serial of the certificate to revoke and the reason
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SMIMEApi
     */
    public smimeRevokePost(modelRevokeRequest: ModelRevokeRequest, options?: AxiosRequestConfig) {
        return SMIMEApiFp(this.configuration).smimeRevokePost(modelRevokeRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * SSLApi - axios parameter creator
 * @export
 */
export const SSLApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * 
         * @summary SSL List Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sslGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/ssl/`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
        /**
         * 
         * @summary SSL Revoke Endpoint
         * @param {ModelRevokeRequest} modelRevokeRequest The serial of the certificate to revoke and the reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sslRevokePost: async (modelRevokeRequest: ModelRevokeRequest, options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            // verify required parameter 'modelRevokeRequest' is not null or undefined
            assertParamExists('sslRevokePost', 'modelRevokeRequest', modelRevokeRequest)
            const localVarPath = `/ssl/revoke`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'POST', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            localVarHeaderParameter['Content-Type'] = 'application/json';

            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};
            localVarRequestOptions.data = serializeDataIfNeeded(modelRevokeRequest, localVarRequestOptions, configuration)

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * SSLApi - functional programming interface
 * @export
 */
export const SSLApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = SSLApiAxiosParamCreator(configuration)
    return {
        /**
         * 
         * @summary SSL List Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sslGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<Array<PortalApisSslCertificateDetails>>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sslGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
        /**
         * 
         * @summary SSL Revoke Endpoint
         * @param {ModelRevokeRequest} modelRevokeRequest The serial of the certificate to revoke and the reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async sslRevokePost(modelRevokeRequest: ModelRevokeRequest, options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<void>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.sslRevokePost(modelRevokeRequest, options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * SSLApi - factory interface
 * @export
 */
export const SSLApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = SSLApiFp(configuration)
    return {
        /**
         * 
         * @summary SSL List Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sslGet(options?: any): AxiosPromise<Array<PortalApisSslCertificateDetails>> {
            return localVarFp.sslGet(options).then((request) => request(axios, basePath));
        },
        /**
         * 
         * @summary SSL Revoke Endpoint
         * @param {ModelRevokeRequest} modelRevokeRequest The serial of the certificate to revoke and the reason
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        sslRevokePost(modelRevokeRequest: ModelRevokeRequest, options?: any): AxiosPromise<void> {
            return localVarFp.sslRevokePost(modelRevokeRequest, options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * SSLApi - object-oriented interface
 * @export
 * @class SSLApi
 * @extends {BaseAPI}
 */
export class SSLApi extends BaseAPI {
    /**
     * 
     * @summary SSL List Endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SSLApi
     */
    public sslGet(options?: AxiosRequestConfig) {
        return SSLApiFp(this.configuration).sslGet(options).then((request) => request(this.axios, this.basePath));
    }

    /**
     * 
     * @summary SSL Revoke Endpoint
     * @param {ModelRevokeRequest} modelRevokeRequest The serial of the certificate to revoke and the reason
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof SSLApi
     */
    public sslRevokePost(modelRevokeRequest: ModelRevokeRequest, options?: AxiosRequestConfig) {
        return SSLApiFp(this.configuration).sslRevokePost(modelRevokeRequest, options).then((request) => request(this.axios, this.basePath));
    }
}


/**
 * UserApi - axios parameter creator
 * @export
 */
export const UserApiAxiosParamCreator = function (configuration?: Configuration) {
    return {
        /**
         * Returns the username of the logged in user
         * @summary whoami Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        whoamiGet: async (options: AxiosRequestConfig = {}): Promise<RequestArgs> => {
            const localVarPath = `/whoami`;
            // use dummy base URL string because the URL constructor only accepts absolute URLs.
            const localVarUrlObj = new URL(localVarPath, DUMMY_BASE_URL);
            let baseOptions;
            if (configuration) {
                baseOptions = configuration.baseOptions;
            }

            const localVarRequestOptions = { method: 'GET', ...baseOptions, ...options};
            const localVarHeaderParameter = {} as any;
            const localVarQueryParameter = {} as any;

            // authentication API required
            // http bearer authentication required
            await setBearerAuthToObject(localVarHeaderParameter, configuration)


    
            setSearchParams(localVarUrlObj, localVarQueryParameter);
            let headersFromBaseOptions = baseOptions && baseOptions.headers ? baseOptions.headers : {};
            localVarRequestOptions.headers = {...localVarHeaderParameter, ...headersFromBaseOptions, ...options.headers};

            return {
                url: toPathString(localVarUrlObj),
                options: localVarRequestOptions,
            };
        },
    }
};

/**
 * UserApi - functional programming interface
 * @export
 */
export const UserApiFp = function(configuration?: Configuration) {
    const localVarAxiosParamCreator = UserApiAxiosParamCreator(configuration)
    return {
        /**
         * Returns the username of the logged in user
         * @summary whoami Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        async whoamiGet(options?: AxiosRequestConfig): Promise<(axios?: AxiosInstance, basePath?: string) => AxiosPromise<string>> {
            const localVarAxiosArgs = await localVarAxiosParamCreator.whoamiGet(options);
            return createRequestFunction(localVarAxiosArgs, globalAxios, BASE_PATH, configuration);
        },
    }
};

/**
 * UserApi - factory interface
 * @export
 */
export const UserApiFactory = function (configuration?: Configuration, basePath?: string, axios?: AxiosInstance) {
    const localVarFp = UserApiFp(configuration)
    return {
        /**
         * Returns the username of the logged in user
         * @summary whoami Endpoint
         * @param {*} [options] Override http request option.
         * @throws {RequiredError}
         */
        whoamiGet(options?: any): AxiosPromise<string> {
            return localVarFp.whoamiGet(options).then((request) => request(axios, basePath));
        },
    };
};

/**
 * UserApi - object-oriented interface
 * @export
 * @class UserApi
 * @extends {BaseAPI}
 */
export class UserApi extends BaseAPI {
    /**
     * Returns the username of the logged in user
     * @summary whoami Endpoint
     * @param {*} [options] Override http request option.
     * @throws {RequiredError}
     * @memberof UserApi
     */
    public whoamiGet(options?: AxiosRequestConfig) {
        return UserApiFp(this.configuration).whoamiGet(options).then((request) => request(this.axios, this.basePath));
    }
}


