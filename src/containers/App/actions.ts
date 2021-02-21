import { actionCreatorFactory } from "../../utils/actions";

export const $REDIRECT_TO = '$REDIRECT_TO'; // special action to request routing redirect
export const APP_LOADING_REQUESTED = '/digital/actions/APP_LOADING_REQUESTED';
export const APP_LOADING_SUCCEEDED = '/digital/actions/APP_LOADING_SUCCEEDED';
export const APP_LOADING_CANCELLED = '/digital/actions/APP_LOADING_CANCELLED';
export const APP_LOADING_FAILED = '/digital/actions/APP_LOADING_FAILED';

/**
 * Request the initial app loading flow
 */
export const appLoadingRequested = actionCreatorFactory<null, null>(APP_LOADING_REQUESTED)

/**
 * Initial app loading request ends with success
 */
export const appLoadingSucceeded = actionCreatorFactory<AppLoadingData, null>(APP_LOADING_SUCCEEDED)

/**
 * Initial app loading request results in a cancellation
 */
export const appLoadingCancelled = actionCreatorFactory<null, null>(APP_LOADING_CANCELLED)

/**
 * Initial app loading request has failed.
 * 
 * @param payload - the error reported
 */
export const appLoadingFailed = actionCreatorFactory<Error, null>(APP_LOADING_FAILED)
