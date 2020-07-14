import { createBrowserHistory } from 'history'
import { routePath } from 'src/constants'
import { TypedProps } from 'src/types'

export const history = createBrowserHistory()

export const gotoError = (errorResponseData: TypedProps.ErrorResponseData) => {
  history.push(routePath.ERROR, { errorResponseData })
}
export const push = <T>(targetUrl: string, props?: T) => {
  history.push(targetUrl, { ...props })
}

export const redirect = (targetUrl: string) => {
  history.replace(targetUrl)
}
