import * as React from 'react'
import { List } from 'antd'
import CommentListItem from './CommentListItem'
import ThreadList from './ThreadList'
const CommentList: React.FC = () => {
  return (
    <List>
      <li>
        <CommentListItem type="comment" />
      </li>
      <li>
        <CommentListItem type="comment" />
      </li>
      <li>
        <CommentListItem type="comment" />
      </li>
      <li>
        <CommentListItem type="comment" />
      </li>
      <li>
        <CommentListItem type="comment" />
      </li>
      <li>
        <CommentListItem type="comment" />
      </li>
      <li>
        <CommentListItem type="comment" />
      </li>
      <li>
        <CommentListItem type="comment" />
      </li>
      <li>
        <CommentListItem type="comment" />
      </li>
    </List>
  )
}

export default CommentList
