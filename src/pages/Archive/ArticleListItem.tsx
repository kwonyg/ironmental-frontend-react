import * as React from 'react'
import TagLists from '../../components/TagList'
import { List } from 'antd'
import { Article } from '../../types'

type ArticleProps = {
  article: Article
}
const ArticleListItem: React.FC<ArticleProps> = ({ article }) => {
  const { title, imgUrl, href, tags, content } = article

  return (
    <List.Item
      extra={
        <img width={200} height={200} alt="콘텐츠 대표 이미지" src={imgUrl} />
      }
    >
      <List.Item.Meta title={<a href={href}>{title}</a>} />
      <TagLists tags={tags} />
      {content}
    </List.Item>
  )
}

export default ArticleListItem
