import React, { useState } from 'react'
import styled from 'styled-components'
import { Comment, Tooltip, Avatar } from 'antd'
import { LikeOutlined, LikeFilled } from '@ant-design/icons'
import ReactMarkdown from 'react-markdown'
import 'github-markdown-css'

const ThreadListItem: React.FC = () => {
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

  const onClickLikes = () => {
    setLikes(!likes)
  }

  return (
    <StyledComment
      actions={[
        <ActionItem key="like-status" onClick={onClickLikes}>
          {likes ? <LikeFilled /> : <LikeOutlined />}
          214
        </ActionItem>,
      ]}
      author={<a href="http://google.com">리누스 토발즈</a>}
      avatar={
        <Avatar
          src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          alt="송중기"
        />
      }
      content={
        <MarkDownContainer className="markdown-body">
          <ReactMarkdown source={markDown} />
        </MarkDownContainer>
      }
      datetime={
        <Tooltip title={'시간'}>
          <span>4분전</span>
        </Tooltip>
      }
    />
  )
}

const ActionItem = styled.div`
  margin-right: 10px;
  &:hover {
    cursor: pointer;
  }
`

const StyledComment = styled(Comment)`
  margin-top: -1px;
  background-color: #fafbfd;
  border-top: 1px solid #e6ecf5;
  border-bottom: 1px solid #e6ecf5;
  padding: 30px;
`

const MarkDownContainer = styled.div`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
  }
  font-size: 90%;
`

export default ThreadListItem
