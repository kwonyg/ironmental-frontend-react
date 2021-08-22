import { ActionTypes } from './actions'
import { TypedActions, TypedState } from 'src/types'

export const initialState: TypedState.ArticleState = {
  error: null,
  loading: false,
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
  state: TypedState.ArticleState = initialState,
  action: TypedActions.Article
) => {
  switch (action.type) {
    case ActionTypes.GET_ARTICLE_SUCCESS: {
      const { article } = action.payload

      return { ...state, article }
    }
    case ActionTypes.GET_ARTICLE_FAILURE: {
      const { error } = action.payload

      return { ...state, error }
    }

    case ActionTypes.START_ARTICLE_LOADING: {
      return { ...state, loading: true }
    }

    case ActionTypes.END_ARTICLE_LOADING: {
      return { ...state, loading: false }
    }

    default:
      return state
  }
}
