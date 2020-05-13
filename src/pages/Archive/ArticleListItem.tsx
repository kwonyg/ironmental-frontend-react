import * as React from 'react'
import TagLists from '../../components/TagList'
import { List } from 'antd'
import { Article } from '../../types'
import styled from 'styled-components'

type ArticleProps = {
  article: Article
}
const ArticleListItem: React.FC<ArticleProps> = ({ article }) => {
  const { title, imgUrl, href, tags, content } = article

  return (
    <ListItem
      extra={
        <img width={200} height={200} alt="콘텐츠 대표 이미지" src={imgUrl} />
      }
    >
      <ListItem.Meta title={<a href={href}>{title}</a>} />
      <TagLists tags={tags} />
      {content}
    </ListItem>
  )
}

const ListItem = styled(List.Item)`
  margin: 10px 0;
  cursor: pointer;
  border-radius: 10px;
  &:hover {
    -webkit-box-shadow: 3px 1px 74px -19px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 3px 1px 74px -19px rgba(0, 0, 0, 0.75);
    box-shadow: 3px 1px 74px -19px rgba(0, 0, 0, 0.75);
    transition: 0.5s;
  }
`

export default ArticleListItem
