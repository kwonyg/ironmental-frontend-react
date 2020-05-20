type ReducerHandler<State, Action> = (state: State, action: Action) => State

export function createReducer<State, Action extends { type: string }>(
  initialState: State,
  handlerMap: { [type: string]: ReducerHandler<State, Action> }
) {
  return function reducer(state = initialState, action: Action) {
    const handler = handlerMap[action.type]

    return handler ? handlerMap[action.type](state, action) : state
  }
}
