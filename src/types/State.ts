import { rootReducer } from 'src/services/rootReducer'
import { PropsTypes } from 'src/types'

export type RootState = ReturnType<typeof rootReducer>

export type ArticlesState = {
  articles: PropsTypes.Article[]
  nextLink: string
}

export type ArticleState = {
  article: {
    id: string
    title: string
    tags: string[]
    text: string
    articleLink: string
    created: string
    updated: string
  }
}

export type LoadingState = {
  isLoading: boolean
}

export type AuthState = {
  auth: {
    isSub: boolean
    isCertify: boolean
  }
}
