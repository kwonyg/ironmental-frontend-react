import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { fetchArticleById } from './request'
import { actions } from './actions'
import { articleReducer, initialState } from './reducer'
import { rootArticleSaga } from './saga'
import { throwError } from 'redux-saga-test-plan/providers'

describe('Article Service', () => {
  describe(`Reducer Unit Tests`, () => {
    const error = new Error()
    const article = {
      id: '5cf142b857cd51f683cd928e',
      tags: ['gres', 'gewag'],
      title: 'CORS 란',
      text: 'CORS text or none',
      articleLink: 'https://google.com',
      commentCount: 23,
      likesCount: 42,
      comments: [
        '5cf1423357cd510271cd9289',
        '5cf1423357cd510271cd9289',
        '5cf1423357cd510271cd9289',
        '5cf1423357cd510271cd9289',
        '5cf1423357cd510271cd9289',
        '5cf1423357cd510271cd9289',
        '5cf1423357cd510271cd9289',
      ],
      created: '2019-08-21T10:56:39.323Z',
      updated: '2019-08-21T10:56:39.323Z',
    }

    it('START_ARTICLE_LOADING', () => {
      const result = articleReducer(initialState, actions.startArticleLoading())
      expect(result.loading).toBe(true)
    })

    it('END_ARTICLE_LOADING', () => {
      const result = articleReducer(initialState, actions.endArticleLoading())

      expect(result.loading).toBe(false)
    })

    it('GET_ARTICLE_SUCCESS', () => {
      const expected = {
        ...initialState,
        article,
      }

      const result = articleReducer(
        initialState,
        actions.getArticleByIdSuccess(article)
      )

      expect(result).toStrictEqual(expected)
    })

    it('GET_ARTICLE_FAILURE', () => {
      const expected = { ...initialState, error }

      const result = articleReducer(
        initialState,
        actions.getArticleByIdFailure(error)
      )
      expect(result).toStrictEqual(expected)
    })
  })

  describe('Saga with Reducer Integration Tests', () => {
    const id = '5cf142b857cd51f683cd928e'
    const article = {
      id: '5cf142b857cd51f683cd928e',
      tags: ['gres', 'gewag'],
      title: 'CORS 란',
      text: 'CORS text or none',
      articleLink: 'https://google.com',
      commentCount: 23,
      likesCount: 42,
      comments: [
        '5cf1423357cd510271cd9289',
        '5cf1423357cd510271cd9289',
        '5cf1423357cd510271cd9289',
      ],
      created: '2019-08-21T10:56:39.323Z',
      updated: '2019-08-21T10:56:39.323Z',
    }

    it('check final state when get getArticleSaga Success', () => {
      return expectSaga(rootArticleSaga)
        .withReducer(articleReducer)
        .provide([[matchers.call.fn(fetchArticleById), { data: article }]])
        .put(actions.startArticleLoading())
        .put(actions.getArticleByIdSuccess(article))
        .put(actions.endArticleLoading())
        .dispatch(actions.getArticleById(id))
        .hasFinalState({ ...initialState, article: { ...article } })
        .run()
    })

    it('check final state when get getArticleSaga Fail', () => {
      const error = new Error()

      return expectSaga(rootArticleSaga)
        .withReducer(articleReducer)
        .provide([[matchers.call.fn(fetchArticleById), throwError(error)]])
        .put(actions.startArticleLoading())
        .put(actions.getArticleByIdFailure(error))
        .put(actions.endArticleLoading())
        .dispatch(actions.getArticleById(id))
        .hasFinalState({ ...initialState, error })
        .run()
    })
  })
})
