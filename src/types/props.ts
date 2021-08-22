export interface User {
  userId: string
  email: string
  username: string
  /* isSubscribe: boolean
  likes: string[]
  favoriteTags: string[] */
}

export interface Article {
  id: string
  title: string
  tags: string[]
  text: string
  articleLink?: string | undefined
  created: string
  updated: string
}

export interface Comment {
  id: string
  text: string
  author: {
    userId: string
    userName: string
  }
  created: string
  updated: string
  likesCount: number
  threadCount: number
  links: {
    threads: string
  }
}

export interface ErrorInfo {
  status:
    | '404'
    | 403
    | 404
    | 500
    | '403'
    | '500'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    | undefined
  title: number | string
  message: string
}

export interface ErrorResponseData {
  status: string | number
  message: string
}
