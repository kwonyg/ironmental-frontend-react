import { combineReducers } from 'redux'
import { articlesReducer } from 'src/services/articles/reducer'
import { articleReducer } from 'src/services/article/reducer'
import { loadingReducer } from 'src/services/loading/reducer'

export const rootReducer = combineReducers({
  articles: articlesReducer,
  article: articleReducer,
  loading: loadingReducer,
})
