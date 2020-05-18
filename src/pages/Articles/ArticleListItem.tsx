import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { List } from 'antd'
import { routePath } from '../../constants'
import { Article } from '../../types'
import TagLists from '../../components/TagList'

type ArticleProps = {
  article: Article
}
const ArticleListItem: React.FC<ArticleProps> = ({ article }) => {
  const { id, title, /* imgUrl, href, */ tags, content } = article
  const linkTo = `${routePath.ARTICLES}/${id}`

  return (
    <ListItem>
      <ItemLink to={linkTo}>
        <TagLists tags={tags} />
        <ItemMeta title={<Title>{title}</Title>} />
        <Description>{content}</Description>
      </ItemLink>
    </ListItem>
  )
}

const ListItem = styled(List.Item)`
  margin: 10px 0;
  cursor: pointer;
  border-radius: 10px;

  &:hover {
    -webkit-box-shadow: 3px 1px 74px -19px rgba(0, 0, 0, 0.2);
    -moz-box-shadow: 3px 1px 74px -19px rgba(0, 0, 0, 0.2);
    box-shadow: 3px 1px 74px -19px rgba(0, 0, 0, 0.2);
    transition: 0.5s;
  }
`

const ItemMeta = styled(ListItem.Meta)`
  margin: 0;

  & h4 {
    margin: 0 !important;
  }
`

const Description = styled.span`
  color: grey;
`

const ItemLink = styled(Link)`
  text-decoration: none;
  color: black;
`

const Title = styled.div`
  text-decoration: none;
  color: black;
  font-size: 1rem;
  font-weight: bold;
`

export default ArticleListItem
