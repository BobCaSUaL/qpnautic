import { actionCreatorFactory } from "../../utils/actions";
import { Quiz, QuizOption } from "./type";

export const QUIZ_LOADING_REQUESTED = '/digital/actions/QUIZ_LOADING_REQUESTED';
export const QUIZ_LOADING_SUCCEEDED = '/digital/actions/QUIZ_LOADING_SUCCEEDED';
export const QUIZ_LOADING_CANCELLED = '/digital/actions/QUIZ_LOADING_CANCELLED';
export const QUIZ_LOADING_FAILED = '/digital/actions/QUIZ_LOADING_FAILED';

export const QUIZ_FOCUS_REQUESTED = '/digital/actions/QUIZ_FOCUS_REQUESTED';
export const QUIZ_FOCUS_SUCCEEDED = '/digital/actions/QUIZ_FOCUS_SUCCEEDED';
export const QUIZ_FOCUS_CANCELLED = '/digital/actions/QUIZ_FOCUS_CANCELLED';
export const QUIZ_FOCUS_FAILED = '/digital/actions/QUIZ_FOCUS_FAILED';

export const QUIZ_ANSWER_REQUESTED = '/digital/actions/QUIZ_ANSWER_REQUESTED';
export const QUIZ_ANSWER_SUCCEEDED = '/digital/actions/QUIZ_ANSWER_SUCCEEDED';
export const QUIZ_ANSWER_CANCELLED = '/digital/actions/QUIZ_ANSWER_CANCELLED';
export const QUIZ_ANSWER_FAILED = '/digital/actions/QUIZ_ANSWER_FAILED';

export const QUIZ_HELPER_SHOW = '/digital/actions/QUIZ_HELPER_SHOW';

/**
 * Request the initial quiz loading flow
 */
export const quizLoadingRequested = actionCreatorFactory<null, null>(QUIZ_LOADING_REQUESTED)

/**
 * Initial quiz loading request ends with success
 */
export const quizLoadingSucceeded = actionCreatorFactory<Array<Quiz>, null>(QUIZ_LOADING_SUCCEEDED)

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


export interface QuizFocusMetaI {
  /**
   * The quiz number to focus on the store (under the computed value `_quizCurrent`)
   * NOTE: the quiz number may be different from the QuizId (look at the reducer for specific implementation)
   */
  onNumber?: number
}

/**
 * Request the current focus on a specific quiz number
 */
export const focusRequested = actionCreatorFactory<null, QuizFocusMetaI>(QUIZ_FOCUS_REQUESTED)

/**
 * Initial quiz loading request ends with success
 */
export const focusSucceeded = actionCreatorFactory<null, QuizFocusMetaI>(QUIZ_FOCUS_SUCCEEDED)

/**
 * Initial quiz loading request results in a cancellation
 */
export const focusCancelled = actionCreatorFactory<null, QuizFocusMetaI>(QUIZ_FOCUS_CANCELLED)

/**
 * Initial quiz loading request has failed.
 * 
 * @param payload - the error reported
 */
export const focusFailed = actionCreatorFactory<Error, QuizFocusMetaI>(QUIZ_FOCUS_FAILED)


export interface QuizAnswerMetaI {
  /**
   * The QuizId to be associated with the answer
   */
   onQuizId?: number
}

export interface QuizAnswerPayloadI extends QuizOption { }

/**
 * Requeste the apply the answer (aka option) on the specified quiz numer (in the meta)
 */
export const answerRequested = actionCreatorFactory<QuizAnswerPayloadI, QuizAnswerMetaI>(QUIZ_ANSWER_REQUESTED)

/**
 * The apply of the answer (aka option) on the specified quiz numer (in the meta) succeeded
 * The dispatch of this action may also trigger a navigation to the next quiz (Check in the saga for specific implementation)
 */
export const answerSucceeded = actionCreatorFactory<QuizAnswerPayloadI, QuizAnswerMetaI>(QUIZ_ANSWER_SUCCEEDED)

/**
 * The apply of the answer (aka option) on the specified quiz numer (in the meta) results in a cancellation
 */
export const answerCancelled = actionCreatorFactory<null, QuizAnswerMetaI>(QUIZ_ANSWER_CANCELLED)

/**
 * The apply of the answer (aka option) on the specified quiz numer (in the meta) has failed.
 * 
 * @param payload - the error reported
 */
export const answerFailed = actionCreatorFactory<Error, QuizAnswerMetaI>(QUIZ_ANSWER_FAILED)
