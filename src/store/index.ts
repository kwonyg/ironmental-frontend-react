import { applyMiddleware, createStore } from 'redux'
import { rootReducer } from './rootReducer'
import { composeWithDevTools } from 'redux-devtools-extension'

export const configureStore = () => {
  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware()))

  return {
    store,
  }
}
