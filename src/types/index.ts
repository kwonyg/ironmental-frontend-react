export interface Article {
  title: string
  imgUrl: string
  href: string
  tags: string[]
  content: string
}

export interface ErrorInfo {
  status: string
  title: number | string
  subTitle: string
}
