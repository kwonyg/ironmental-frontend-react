import { ActionTypes } from 'src/types'
type AllActions = ActionTypes.Articles

type ReducerHandlers<State, Action> = (state: State, action: Action) => State

export function createReducer<State, Action extends AllActions>(
  initialState: State,
  handlerMap: { [type: string]: ReducerHandlers<State, Action> }
) {
  return function reducer(state = initialState, action: Action) {
    const handler = handlerMap[action.type]

    return handler ? handlerMap[action.type](state, action) : state
  }
}
