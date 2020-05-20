import { combineReducers } from 'redux'
import { articlesReducer } from 'src/services/articles/reducer'

export const rootReducer = combineReducers({ articles: articlesReducer })
