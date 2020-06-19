import { createBrowserHistory } from 'history'

export const history = createBrowserHistory()

export const push = (targetUrl: string) => {
  history.push(targetUrl)
}

export const redirect = (targetUrl: string) => {
  history.replace(targetUrl)
}
