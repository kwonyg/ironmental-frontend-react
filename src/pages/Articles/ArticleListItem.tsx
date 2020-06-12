import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { List, Space } from 'antd'
import { routePath } from 'src/constants'
import { MessageOutlined, LikeOutlined } from '@ant-design/icons'
import { PropsTypes } from 'src/types'
import TagLists from 'src/components/TagList'

type ArticleProps = {
  article: PropsTypes.Article
}

const ArticleListItem: React.FC<ArticleProps> = ({ article }) => {
  const { id, title, tags, text } = article
  const linkTo = `${routePath.ARTICLES}/${id}`

  const actions = [
    <Space key="like-status">
      <LikeOutlined />
      {234}
    </Space>,
    <Space key="comments">
      <MessageOutlined />
      {345}
    </Space>,
  ]

  return (
    <ListItem actions={actions}>
      <TagLists tags={tags} />
      <ItemMeta
        title={
          <ItemLink to={linkTo}>
            <Title>{title}</Title>
          </ItemLink>
        }
      />
      <Description>{text}</Description>
    </ListItem>
  )
}

const ListItem = styled(List.Item)`
  margin: -1px 0;
  border-top: 1px solid #f0f0f0;
`

const ItemMeta = styled(ListItem.Meta)`
  margin: 0;
  & h4 {
    margin: 0 !important;
  }
`

const Description = styled.p`
  color: grey;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`

const ItemLink = styled(Link)`
  display: block;
  text-decoration: none;

  color: #000;
  &:hover {
    color: black;
    text-decoration: underline;
    /* text-decoration-thickness: 10px; */
    text-decoration-color: #000;
  }
`

const Title = styled.div`
  text-decoration: none;
  color: black;
  font-size: 1rem;
  font-weight: bold;
`

export default ArticleListItem
