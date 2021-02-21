
/**
 * Action type.
 * 
 * It may be declared as constant
 */
export declare type ActionType = string;

/**
 * Payload type.
 * 
 * It represents the part of the action that carries data.
 * Should be part of the payload any information that does not represents
 * the type, the status or a special requested behaviour.
 * Refers also to the MetaType.
 */
export declare type PayloadType = null | Error | {[key: string]: any};

/**
 * Any special requested behaviour information may be hold by the meta.
 * Meta should also be used to carries debug information, comments or any
 * information that does not directly maninipulate the state and / or is not
 * a payload data.
 */
export declare type MetaType = null | {[key: string]: any};

/**
 * An actions is the unique source of information for the store.
 * It carries a payload information used to create a new description of the
 * world (aka a new Store instance) and / or to trigger one or more saga.
 */
export declare interface Action<P extends PayloadType, M extends MetaType> {
  type: ActionType
  payload: P
  meta: M
  error: boolean
}

/**
 * A function that create an action with a specific action type
 * 
 * @param meta - the action meta
 * @param payload - the action payload
 */
export interface ActionCreator<P extends PayloadType, M extends MetaType> {
  (
    meta?: M,
    payload?: P,
  ): Action<P, M>;
}

/**
 * The factory for an action creator
 * @param type - the action type
 * @param mergeMeta - a function used to infer meta information from elsewhere.
 */
export interface ActionCreatorFactory<P extends PayloadType, M extends MetaType> {
  (
    type: ActionType,
    mergeMeta?: (payload: P, meta: M) => M,
  ): ActionCreator<P, M>
}

/**
 * Dispatch an action to a specific store.
 */
export interface ActionDispatcher {
  (
    action: Action<PayloadType, MetaType>,
  ): void
}

export function actionCreatorFactory<P extends PayloadType, M extends MetaType> (
  type: ActionType,
  mergeMeta?: MetaType,
) {
  function actionCreator(meta: M, payload: P): Action<P, M> {
    return {
      type,
      meta: typeof mergeMeta === 'function'
        ? mergeMeta(payload, meta)
        : meta,
      payload: payload as P,
      error: payload instanceof Error,
    };
  }
  return actionCreator as ActionCreator<P, M>;
}
