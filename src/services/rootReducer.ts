import { combineReducers } from 'redux'
import { articlesReducer } from 'src/services/articles/reducer'
import { articleReducer } from 'src/services/article/reducer'

export const rootReducer = combineReducers({
  articles: articlesReducer,
  article: articleReducer,
})
