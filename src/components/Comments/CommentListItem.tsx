import React, { useState } from 'react'
import { Comment, Tooltip, Avatar } from 'antd'
import { LikeOutlined, LikeFilled, MessageOutlined } from '@ant-design/icons'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'
import styled from 'styled-components'
import ThreadList from 'src/components/Threads/ThreadList'
import 'github-markdown-css'

type Props = {
  type?: 'article' | 'profile'
}

const CommentListItem: React.FC<Props> = ({ type = 'article' }) => {
  const markDown = `# ironmental-frontend-react

  아이언멘탈 리뉴얼 프로젝트

  ## Core External Library

  - ant.design
  - Lottie

  ## Need API data Doc

  https://ironmental-story.netlify.app/ powered by storybook

  CRA Default README.md
  This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

  ## Available Scripts

  In the project directory, you can run:`

  // FIXME: API 완성되면 리덕스 상태로 빼기
  const [likes, setLikes] = useState(false)
  const [showThread, setShowThread] = useState(false)

  const onClickLikes = () => {
    setLikes(!likes)
  }

  const onClickShowThread = () => {
    setShowThread(!showThread)
  }

  return (
    <>
      <Comment
        actions={
          type === 'article'
            ? [
                <ActionItem key="like-status" onClick={onClickLikes}>
                  {likes ? <LikeFilled /> : <LikeOutlined />}
                  214
                </ActionItem>,
                <ActionItem key="comments" onClick={onClickShowThread}>
                  <MessageOutlined />
                  214
                </ActionItem>,
                <ActionItem
                  key="reply-to"
                  style={{ color: '#1890ff' }}
                  onClick={onClickShowThread}
                >
                  쓰레드 보기..
                </ActionItem>,
              ]
            : []
        }
        author={<a href="http://google.com">송중기</a>}
        avatar={
          <Avatar
            src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
            alt="송중기"
          />
        }
        content={
          <div className="markdown-body">
            <ReactMarkdown source={markDown} />
          </div>
        }
        datetime={
          <Tooltip title={'시간'}>
            <span>4분전</span>
          </Tooltip>
        }
      />
      {showThread && <ThreadList />}
    </>
  )
}

const ActionItem = styled.div`
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`

export default CommentListItem
