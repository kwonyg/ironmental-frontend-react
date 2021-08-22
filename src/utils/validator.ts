import { TypedProps } from 'src/types'

const emailRegex = new RegExp(
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
)

export const validateEmail = (email: string): boolean => emailRegex.test(email)

export const isArticle = (
  likeItem: TypedProps.Article | TypedProps.Comment
): likeItem is TypedProps.Article => {
  return (likeItem as TypedProps.Article).articleLink !== undefined
}
