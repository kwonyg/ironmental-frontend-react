import React, { useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { List } from 'antd'
import { PropsTypes } from 'src/types'
import ArticleListItem from './ArticleListItem'
import ArticlesLoading from './ArticlesLoading'
import { getArticles } from 'src/services/articles/reducer'
import { articlesSelector } from 'src/services/articles/selectors'

// TODO: useParams를 사용하여 ArchiveIntroSection일 경우 인피니티 스크롤이 먹히지 않도록 하기
const ArticleList: React.FC = () => {
  /*  const listData = [
    {
      id: '5cf1423357cd510271cd9289',
      title: `CORS란 무엇인가요?`,
      tags: ['web'],
      text:
        'CORS(Cross Origin Resource Sharing)현재 도메인 이외의 다른 도메인으로 리소스를 요청하는 경우 ex) SPA(Single Page Application) 보안 상의 이유로 브라우저는 CORS를 제한same origin policy',
      articleLink: 'http://ant.design',
      created: '2019-05-31T15:05:28.527Z',
      updated: '2019-05-31T15:05:28.527Z',
    },
    {
      id: '5cf1423357cd510271cd9289',
      title: `Race Condition 이란?`,
      tags: ['os'],
      text: '',
      articleLink: 'http://ant.design',
      created: '2019-05-31T15:05:28.527Z',
      updated: '2019-05-31T15:05:28.527Z',
    },
    {
      id: '5cf1423357cd510271cd9289',
      title: `Show HN: Zoom-CLI, an automated tool to change your Zoom virtual background `,
      tags: ['kubernetes'],
      text:
        '원래 사용하는 기본 컨테이너의 기능을 확장하거나 강화하는 용도의 컨테이너를 추가하는 패턴 기본 컨테이너와 독립적으로 동작하는 별도의 컨테이너를 붙이는 패턴부가적인 공통 기능들은 사이드카 컨테이너를 추가해서 사용',
      articleLink: 'http://ant.design',
      created: '2019-05-31T15:05:28.527Z',
      updated: '2019-05-31T15:05:28.527Z',
    },
    {
      id: '5cf1423357cd510271cd9289',
      title: `고차 함수(Higher-Order Function)란 무엇인가요?`,
      tags: ['kubernetes'],
      text: '',
      articleLink: 'http://ant.design',
      created: '2019-05-31T15:05:28.527Z',
      updated: '2019-05-31T15:05:28.527Z',
    },
    {
      id: '5cf1423357cd510271cd9289',
      title: `가상 돔(Virtual DOM)과 실제 DOM의 차이점이 무엇인가요?`,
      tags: ['javascript', 'web', 'html'],
      text:
        'DOM: Document Object Model로 웹페이지를 자바스크립트로 제어하기 위한 문서 객체 모델을 의미합니다. 가상 돔(Virtual DOM) 자바스크립트 오브젝트 형식으로 되어있는 가상의 DOM 입니다. 가상으로 만든 돔과 기존의 돔과 비교하여 변화가 필요한 부분만 업데이트하기 위해 사용..',
      articleLink: 'http://ant.design',
      created: '2019-05-31T15:05:28.527Z',
      updated: '2019-05-31T15:05:28.527Z',
    },
    {
      id: '5cf1423357cd510271cd9289',
      title: `Show HN: Zoom-CLI, an automated tool to change your Zoom virtual background`,
      tags: ['web'],
      text:
        'CORS(Cross Origin Resource Sharing)현재 도메인 이외의 다른 도메인으로 리소스를 요청하는 경우 ex) SPA(Single Page Application) 보안 상의 이유로 브라우저는 CORS를 제한same origin policy',
      articleLink: 'http://ant.design',
      created: '2019-05-31T15:05:28.527Z',
      updated: '2019-05-31T15:05:28.527Z',
    },
    {
      id: '5cf1423357cd510271cd9289',
      title: `Race Condition 이란?`,
      tags: ['os'],
      text: '',
      articleLink: 'http://ant.design',
      created: '2019-05-31T15:05:28.527Z',
      updated: '2019-05-31T15:05:28.527Z',
    },
    {
      id: '5cf1423357cd510271cd9289',
      title: `What is Sidecar pattern in k8s`,
      tags: ['kubernetes'],
      text:
        '원래 사용하는 기본 컨테이너의 기능을 확장하거나 강화하는 용도의 컨테이너를 추가하는 패턴 기본 컨테이너와 독립적으로 동작하는 별도의 컨테이너를 붙이는 패턴부가적인 공통 기능들은 사이드카 컨테이너를 추가해서 사용',
      articleLink: 'http://ant.design',
      created: '2019-05-31T15:05:28.527Z',
      updated: '2019-05-31T15:05:28.527Z',
    },
    {
      id: '5cf1423357cd510271cd9289',
      title: `Show HN: Run VSCode on iPhone and iPad`,
      tags: ['kubernetes'],
      text: '',
      articleLink: 'http://ant.design',
      created: '2019-05-31T15:05:28.527Z',
      updated: '2019-05-31T15:05:28.527Z',
    },
    {
      id: '5cf1423357cd510271cd9289',
      title: `가상 돔(Virtual DOM)과 실제 DOM의 차이점이 무엇인가요?`,
      tags: ['javascript', 'web', 'html'],
      text:
        'DOM: Document Object Model로 웹페이지를 자바스크립트로 제어하기 위한 문서 객체 모델을 의미합니다. 가상 돔(Virtual DOM) 자바스크립트 오브젝트 형식으로 되어있는 가상의 DOM 입니다. 가상으로 만든 돔과 기존의 돔과 비교하여 변화가 필요한 부분만 업데이트하기 위해 사용..',
      articleLink: 'http://ant.design',
      created: '2019-05-31T15:05:28.527Z',
      updated: '2019-05-31T15:05:28.527Z',
    },
  ] */

  const disptach = useDispatch()
  const { loading, articles } = useSelector(articlesSelector)
  const $observerEl = useRef<HTMLDivElement>(null)

  const articleList = useMemo(
    () =>
      articles.map((item: PropsTypes.Article, index: number) => (
        <ArticleListItem key={index} article={item} isLoading={loading} />
      )),
    [articles, loading]
  )

  // TODO: 승욱이랑 nextLink를 링크로 할지, 아니면 다음 쿼리를 넘길지 의논하기. 아니면 굳이 헤이토스를 지키지 않고 앞에서 해결해도 괜찮을듯
  useEffect(() => {
    disptach(getArticles(0, 15))
  }, [disptach])

  // TODO: 인피니티 스크롤 hooks나 공통 컴포넌트로 빼기
  /* useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const target = entries[0]
      if (target.isIntersecting) {
        observer.unobserve($observerEl.current as Element)
        // dispatch(loadMore)
        observer.observe($observerEl.current as Element)
      }
    })
    observer.observe($observerEl.current as Element)
  }, []) */

  // FIXME: 첫 진입시 스켈레톤이미지가 나오지 않는 부분
  return (
    <>
      <List itemLayout="vertical" size="large">
        {articleList}
      </List>
      <ArticlesLoading isEnd={true /*loading */} ref={$observerEl} />
    </>
  )
}

export default ArticleList
