import React, { useEffect, useMemo, useRef } from 'react'
import { List } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import { useInfiniteScroll } from 'src/hooks'
import { PropsTypes } from 'src/types'
import { apiUtils } from 'src/utils'
import { actions } from 'src/services/articles/actions'
import ArticleListItem from './ArticleListItem'
import ArticlesLoading from 'src/pages/Articles/ArticlesLoading'

type Props = {
  scrollType: 'infinite' | 'loadMore'
  articles: PropsTypes.Article[]
  loading: boolean
  nextLink: string
}
const ArticleList: React.FC<Props> = ({
  scrollType = 'loadMore',
  articles,
  loading,
  nextLink,
}) => {
  const dispatch = useDispatch()
  const target = useRef<HTMLDivElement>(null)

  const articleList = useMemo(
    () =>
      articles.map((item: PropsTypes.Article, index: number) => (
        <ArticleListItem key={index} article={item} />
      )),
    [articles]
  )

  useEffect(() => {
    if (!articles.length) {
      dispatch(actions.getArticles(0, 15))
      return
    }
  }, [dispatch, articles.length])

  useInfiniteScroll({
    target,
    onIntersect: entries => {
      if (!loading && !!nextLink && entries[0].isIntersecting) {
        const { offset, limit } = apiUtils.querystringToObj(nextLink)

        dispatch(actions.getArticles(offset, limit))
      }
    },
  })

  return (
    <>
      <List itemLayout="vertical" size="large" style={{ marginBottom: '30px' }}>
        {articleList}
      </List>
      {scrollType === 'infinite' && (
        <ArticlesLoading ref={target} isEnd={!loading} />
      )}
    </>
  )
}

export default ArticleList
