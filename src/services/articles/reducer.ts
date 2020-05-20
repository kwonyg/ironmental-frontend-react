import { PropsTypes, ActionTypes } from 'src/types'
import { reduxUtils } from 'src/utils'
// actions
const GET_ARTICLES = 'article/GET_ARTICLES' as const

export const getArticleList = ({ page }: { page: number | string }) => ({
  type: GET_ARTICLES,
  payload: { page },
})

// state
type ArticlesState = {
  articles: null | PropsTypes.Article[]
}

const initialState: ArticlesState = {
  articles: null,
}

// reducer
export const articlesReducer = reduxUtils.createReducer<
  ArticlesState,
  ActionTypes.Articles
>(initialState, {
  [GET_ARTICLES]: (
    state: ArticlesState,
    action: ActionTypes.Articles
  ): ArticlesState => ({
    ...state,
  }),
})
