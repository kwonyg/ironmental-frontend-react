import { articleReducer, initialState } from './reducer'
import { actions } from './actions'

describe(`Article Service's Reducer`, () => {
  const payloads = {
    error: {
      404: {
        status: 404,
        message: '해당 글을 찾지 못하였습니다 ㅠ.ㅠ',
      },
      500: {
        status: 500,
        message: '서버에 문제가 있는 것 같아요 ㅠ.ㅠ 기다려주세요',
      },
    },
    article: {
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
    },
  }

  it('GET_ARTICLE_SUCCESS', () => {
    const expected = {
      ...initialState,
      article: {
        ...payloads.article,
      },
    }

    const result = articleReducer(
      initialState,
      actions.getArticleByIdSuccess(payloads.article)
    )

    expect(result).toStrictEqual(expected)
  })

  it('GET_ARTICLE_FAILURE', () => {
    const expected = { ...initialState, error: { ...payloads.error[404] } }

    const result = articleReducer(
      initialState,
      actions.getArticleByIdFailure(payloads.error[404])
    )
  })
})
