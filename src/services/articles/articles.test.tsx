import { expectSaga } from 'redux-saga-test-plan'
import * as matchers from 'redux-saga-test-plan/matchers'
import { articlesReducer, initialState } from './reducer'
import { actions } from './actions'
import { rootArticlesSaga } from './saga'
import { fetchArticles } from './request'
import { throwError } from 'redux-saga-test-plan/providers'

describe('Articles Service', () => {
  const error = new Error()
  const articles = [
    {
      tags: ['web'],
      id: '5d5d236725ddda12c774a5ce',
      title: 'GET과 POST의 차이가 무엇인가요?',
      text: 'GET은 GET이고 POST는 POST다',
      created: '2019-08-21T10:56:39.323Z',
      updated: '2019-08-21T10:56:39.323Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['kubernetes'],
      id: '5d5ba483e98e655167f88336',
      title: '쿠버네티스는 어려워',
      text: '',
      created: '2019-08-20T07:42:59.660Z',
      updated: '2019-08-20T07:42:59.660Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['js', 'javascript'],
      id: '5d5ba483e98e655167f88335',
      title: 'npm이란 무엇인가요?',
      text:
        '**npm**(Node Package Manager)\n\n- 자바스크립트 패키지 매니저\n- Node.js에서 사용할 수 있는 모듈을 패키지화하여 모아둔 저장소\n- 패키지 설치 및 관리를 위한 CLI를 제공\n    - **CLI**(Command line interface)\n\n#### 사용방법\n\n```bash\n$ npm install <package>\n```\n\n- `npm install` 명령어 뒤에 설치할 패키지 이름을 지정\n',
      created: '2019-08-20T07:42:59.569Z',
      updated: '2019-08-20T07:42:59.570Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['js', 'javascript'],
      id: '5d5ba458b747944fc97ab8fc',
      title: '자바스크립트 킹왕짱짱맨',
      text: '짱이다',
      created: '2019-08-20T07:42:16.666Z',
      updated: '2019-08-20T07:42:16.666Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['js', 'javascript'],
      id: '5d5ba458b747944fc97ab8fb',
      title: '웹팩이란 무엇인가요???',
      text: '웹팩은 웹팩이다.',
      created: '2019-08-20T07:42:16.581Z',
      updated: '2019-08-20T07:42:16.581Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['js', 'javascript'],
      id: '5d5ba458b747944fc97ab8fa',
      title: '바벨 바벨',
      text: '',
      created: '2019-08-20T07:42:16.493Z',
      updated: '2019-08-20T07:42:16.493Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['js', 'javascript'],
      id: '5d5ba458b747944fc97ab8f9',
      title: 'Babel이란 무엇인가요?',
      text: '**Babel**은 ES6+ 코드를 ES5 이하의 버전으로 변환한다.\n',
      created: '2019-08-20T07:42:16.367Z',
      updated: '2019-08-20T07:42:16.367Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['web'],
      id: '5d5ba3f8e732784c1caac978',
      title: 'CORS란 무엇인가요????? 4번쨰',
      text: 'CORS란 무엇인가요????? 4번쨰',
      created: '2019-08-20T07:40:40.902Z',
      updated: '2019-08-20T07:40:40.902Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['web'],
      id: '5d5ba3f8e732784c1caac977',
      title: 'CORS란 무엇인가요???? 5번쨰',
      text: '흐규 흐규',
      created: '2019-08-20T07:40:40.866Z',
      updated: '2019-08-20T07:40:40.866Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['web'],
      id: '5d5ba3f8e732784c1caac976',
      title: 'CORS란 무엇인가요??? 3번째',
      text: '그만 알아보자 CORS',
      created: '2019-08-20T07:40:40.830Z',
      updated: '2019-08-20T07:40:40.830Z',
    },
    {
      tags: ['web'],
      id: '5d5ba3f8e732784c1caac975',
      title: 'CORS란 무엇인가요??',
      text:
        '**CORS**(Cross Origin Resource Sharing)\n\n- 현재 도메인 이외의 다른 도메인으로 리소스를 요청하는 경우\n    - ex) SPA(Single Page Application)\n- 보안 상의 이유로 브라우저는 CORS를 제한\n',
      created: '2019-08-20T07:40:40.788Z',
      updated: '2019-08-20T07:40:40.788Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['web'],
      id: '5d5ba3f8e732784c1caac973',
      title: 'CORS란 무엇인가요? 2번쨰',
      text:
        '**CORS**(Cross Origin Resource Sharing)\n\n- 현재 도메인 이외의 다른 도메인으로 리소스를 요청하는 경우\n    - ex) SPA(Single Page Application)\n- 보안 상의 이유로 브라우저는 CORS를 제한\n',
      created: '2019-08-20T07:40:40.719Z',
      updated: '2019-08-20T07:40:40.720Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['js', 'javascript'],
      id: '5d5ba370e55e31476c7563d1',
      title:
        'Javascript의 Normal Function과 Arrow Function의 차이는 무엇인가요???',
      text: '가장 큰 차이점은 `this`에 바인딩할 객체이다.\n',
      created: '2019-08-20T07:38:24.860Z',
      updated: '2019-08-20T07:38:24.860Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['js', 'javascript'],
      id: '5d5ba370e55e31476c7563d0',
      title: '자바스크립트 흐규흐규',
      text: '',
      created: '2019-08-20T07:38:24.798Z',
      updated: '2019-08-20T07:38:24.798Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['js', 'javascript'],
      id: '5d5ba370e55e31476c7563cd',
      title:
        'Javascript의 Normal Function과 Arrow Function의 차이는 무엇인가요?',
      text: 'Arrow Function and Normal Function',
      created: '2019-08-20T07:38:24.715Z',
      updated: '2019-08-20T07:38:24.715Z',
      articleLink: 'https://google.com',
    },
  ]
  const nextArticles = [
    {
      tags: ['js', 'javascript'],
      id: '5d5ba370e55e31476c7563d1',
      title:
        'Javascript의 Normal Function과 Arrow Function의 차이는 무엇인가요???',
      text: '가장 큰 차이점은 `this`에 바인딩할 객체이다.\n',
      created: '2019-08-20T07:38:24.860Z',
      updated: '2019-08-20T07:38:24.860Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['js', 'javascript'],
      id: '5d5ba370e55e31476c7563d0',
      title: '자바스크립트 흐규흐규',
      text: '',
      created: '2019-08-20T07:38:24.798Z',
      updated: '2019-08-20T07:38:24.798Z',
      articleLink: 'https://google.com',
    },
    {
      tags: ['js', 'javascript'],
      id: '5d5ba370e55e31476c7563cd',
      title:
        'Javascript의 Normal Function과 Arrow Function의 차이는 무엇인가요?',
      text: 'Arrow Function and Normal Function',
      created: '2019-08-20T07:38:24.715Z',
      updated: '2019-08-20T07:38:24.715Z',
      articleLink: 'https://google.com',
    },
  ]
  const nextLink = '/articles?offset=15&limit=15'

  describe('Reducer Unit Tests', () => {
    test('START_ARTICLES_LOADING', () => {
      const result = articlesReducer(
        { ...initialState, loading: false },
        actions.startArticlesLoading()
      )

      expect(result.loading).toBe(true)
    })

    test('END_ARTICLES_LOADING', () => {
      const result = articlesReducer(
        { ...initialState, loading: true },
        actions.endArticlesLoading()
      )

      expect(result.loading).toBe(false)
    })

    test('GET_ARTICLES_SUCCESS', () => {
      const expected = { ...initialState, articles, nextLink }
      const result = articlesReducer(
        initialState,
        actions.getArticlesSuccess(articles, nextLink)
      )

      expect(result).toStrictEqual(expected)
    })

    test('GET_ARTICLES_FAILURE', () => {
      const expected = { ...initialState, error }
      const result = articlesReducer(
        initialState,
        actions.getArticlesFailure(error)
      )

      expect(result).toStrictEqual(expected)
    })

    test('GET_MORE_ARTICLES_SUCCESS', () => {
      const expected = {
        ...initialState,
        articles: [...articles, ...nextArticles],
        nextLink,
      }
      const alreadyHasState = {
        ...initialState,
        articles,
        nextLink: 'https://bing.com',
      }
      const result = articlesReducer(
        alreadyHasState,
        actions.getMoreArticlesSuccess(nextArticles, nextLink)
      )

      expect(result).toStrictEqual(expected)
    })

    test('GET_MORE_ARTICLES_FAILURE', () => {
      const expected = {
        ...initialState,
        articles,
        nextLink,
        error,
      }
      const alreadyHasState = {
        ...initialState,
        articles,
        nextLink,
      }
      const result = articlesReducer(
        alreadyHasState,
        actions.getMoreArticlesFailure(error)
      )

      expect(result).toStrictEqual(expected)
    })
  })

  describe('Saga with Reducer Integration Test', () => {
    test('check final state when getArticlesSaga Success', () => {
      return expectSaga(rootArticlesSaga)
        .provide([
          [
            matchers.call.fn(fetchArticles),
            { data: { datas: [...articles], links: { next: nextLink } } },
          ],
        ])
        .withReducer(articlesReducer)
        .put(actions.startArticlesLoading())
        .put(actions.getArticlesSuccess(articles, nextLink))
        .put(actions.endArticlesLoading())
        .dispatch(actions.getArticles(0, 8))
        .hasFinalState({
          ...initialState,
          articles,
          nextLink,
        })
        .run()
    })

    test('check final state when getArticlesSaga Fail', () => {
      return expectSaga(rootArticlesSaga)
        .withReducer(articlesReducer)
        .provide([[matchers.call.fn(fetchArticles), throwError(error)]])
        .put(actions.startArticlesLoading())
        .put(actions.getArticlesFailure(error))
        .put(actions.endArticlesLoading())
        .dispatch(actions.getArticles(0, 8))
        .hasFinalState({
          ...initialState,
          error,
        })
        .run()
    })
  })
})
