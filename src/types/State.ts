import { rootReducer } from 'src/services/rootReducer'
import { PropsTypes } from 'src/types'

export type RootState = ReturnType<typeof rootReducer>

export type ArticlesState = {
  articles: PropsTypes.Article[]
  nextLink: string
}
