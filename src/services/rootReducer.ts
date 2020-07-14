import { combineReducers } from 'redux'
import { articlesReducer } from 'src/services/articles/reducer'
import { articleReducer } from 'src/services/article/reducer'
import { authReducer } from 'src/services/auth/reducer'
import { userReducer } from 'src/services/user/reducer'
import { profileReducer } from 'src/services/profile/reducer'

export const rootReducer = combineReducers({
  articles: articlesReducer,
  article: articleReducer,
  auth: authReducer,
  user: userReducer,
  profile: profileReducer,
})
