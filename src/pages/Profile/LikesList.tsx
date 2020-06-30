import React from 'react'
import styled from 'styled-components'
import { Divider } from 'antd'
import { useSelector } from 'react-redux'
import { profileSelector } from 'src/services/profile/selectors'
import { PropsTypes } from 'src/types'
import ArticleListItem from 'src/components/Articles/ArticleListItem'
import CommentListItem from 'src/components/Comments/CommentListItem'

const isArticle = (
  likeItem: PropsTypes.Article | PropsTypes.Comment
): likeItem is PropsTypes.Article => {
  return (likeItem as PropsTypes.Article).articleLink !== undefined
}

// TODO: API 데이터에서 Likes 아이템이 article인지 comment인지 구분 할 수 있는 타입이 필요함.
const LikesList: React.FC = () => {
  const {
    profile: { likes },
  } = useSelector(profileSelector)

  const likeList = likes.map((likeItem, index) => {
    if (isArticle(likeItem)) {
      return (
        <>
          <ArticleListItem key={index} type="profile" article={likeItem} />
          <Divider style={{ margin: '0' }} />
        </>
      )
    }

    return <CommentListItem key={index} type="profile" />
  })

  return (
    <LikesListContainer>
      <h2>Likes</h2>
      <ul>{likeList}</ul>
    </LikesListContainer>
  )
}

const LikesListContainer = styled.div`
  margin: 0 auto;
  max-width: 700px;
  h2 {
    font-size: 1.5rem;
  }

  ul > li {
    display: block;
  }
`

export default LikesList
