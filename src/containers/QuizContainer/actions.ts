import { actionCreatorFactory } from "../../utils/actions";

export const QUIZ_LOADING_REQUESTED = '/digital/actions/QUIZ_LOADING_REQUESTED';
export const QUIZ_LOADING_SUCCEEDED = '/digital/actions/QUIZ_LOADING_SUCCEEDED';
export const QUIZ_LOADING_CANCELLED = '/digital/actions/QUIZ_LOADING_CANCELLED';
export const QUIZ_LOADING_FAILED = '/digital/actions/QUIZ_LOADING_FAILED';
export const QUIZ_HELPER_SHOW = '/digital/actions/QUIZ_HELPER_SHOW';

/**
 * Request the initial quiz loading flow
 */
export const quizLoadingRequested = actionCreatorFactory<null, null>(QUIZ_LOADING_REQUESTED)

/**
 * Initial quiz loading request ends with success
 */
export const quizLoadingSucceeded = actionCreatorFactory<QuizLoadingData, null>(QUIZ_LOADING_SUCCEEDED)

/**
 * Initial quiz loading request results in a cancellation
 */
export const quizLoadingCancelled = actionCreatorFactory<null, null>(QUIZ_LOADING_CANCELLED)

/**
 * Initial quiz loading request has failed.
 * 
 * @param payload - the error reported
 */
export const quizLoadingFailed = actionCreatorFactory<Error, null>(QUIZ_LOADING_FAILED)
