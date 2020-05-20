import { PropsTypes, ActionTypes, StateTypes } from 'src/types'

export const GET_ARTICLE = 'article/GET_ARTICLE' as const
export const GET_ARTICLE_SUCCESS = 'article/GET_ARTICLE_SUCCESS' as const

export const getArticleById = (id: string) => ({
  type: GET_ARTICLE,
  payload: { id },
})

export const setArticle = (article: PropsTypes.Article) => ({
  type: GET_ARTICLE_SUCCESS,
  payload: { article },
})

const initialState: StateTypes.ArticleState = {
  article: {
    id: '',
    title: '',
    tags: [''],
    text: '',
    articleLink: '',
    created: '',
    updated: '',
  },
}

export const articleReducer = (
  state: StateTypes.ArticleState = initialState,
  action: ActionTypes.Article
) => {
  switch (action.type) {
    case GET_ARTICLE_SUCCESS: {
      const { article } = action.payload

      return { ...state, article }
    }

    default:
      return state
  }
}
