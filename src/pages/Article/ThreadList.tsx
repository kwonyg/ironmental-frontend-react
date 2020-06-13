import * as React from 'react'
import { List } from 'antd'
import CommentListItem from './CommentListItem'
const ThreadList: React.FC = () => {
  return (
    <List>
      <li>
        <CommentListItem />
      </li>
      <li>
        <CommentListItem />
      </li>
      <li>
        <CommentListItem />
      </li>
      <li>
        <CommentListItem />
      </li>
      <li>
        <CommentListItem />
      </li>
      <li>
        <CommentListItem />
      </li>
    </List>
  )
}

export default ThreadList
