import { TypedProps } from 'src/types'

export enum ActionTypes {
  START_ARTICLE_LOADING = 'article/START_ARTICLE_LOADING',
  END_ARTICLE_LOADING = 'article/END_ARTICLE_LOADING',
  GET_ARTICLE = 'article/GET_ARTICLE',
  GET_ARTICLE_SUCCESS = 'article/GET_ARTICLE_SUCCESS',
  GET_ARTICLE_FAILURE = 'article/GET_ARTICLE_FAILURE',
}

export const actions = {
  startArticleLoading: () =>
    ({
      type: ActionTypes.START_ARTICLE_LOADING,
    } as const),
  endArticleLoading: () => ({ type: ActionTypes.END_ARTICLE_LOADING } as const),
  getArticleById: (id: string) =>
    ({
      type: ActionTypes.GET_ARTICLE,
      payload: { id },
    } as const),
  getArticleByIdSuccess: (article: TypedProps.Article) =>
    ({
      type: ActionTypes.GET_ARTICLE_SUCCESS,
      payload: { article },
    } as const),
  getArticleByIdFailure: (error: Error) =>
    ({
      type: ActionTypes.GET_ARTICLE_FAILURE,
      payload: { error },
    } as const),
}
