import React from 'react'
import ArticleListItem from 'src/components/Articles/ArticleListItem'
import styled from 'styled-components'

const LikesList: React.FC = () => {
  return (
    <LikesListContainer>
      <h2>Likes</h2>
      <ul>
        <li />
      </ul>
    </LikesListContainer>
  )
}

const LikesListContainer = styled.div`
  margin: 0 auto;
`

export default LikesList
