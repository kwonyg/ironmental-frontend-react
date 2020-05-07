import * as React from 'react'
import TagLists from './TagList'
import { List } from 'antd'
import { Article } from '../../types'

type ArticleProps = {
  article: Article
}
const ArticleListItem: React.FunctionComponent<ArticleProps> = ({
  article,
}) => {
  const { title, imgUrl, href, tags, content } = article

  return (
    <List.Item
      extra={<img width={272} alt="콘텐츠 대표 이미지" src={imgUrl} />}
    >
      <List.Item.Meta title={<a href={href}>{title}</a>} />
      <TagLists tags={tags} />
      {content}
    </List.Item>
  )
}

export default ArticleListItem
