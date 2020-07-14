import React, { useState } from 'react'
import { Tabs, Input, Button, Form } from 'antd'
import { FileMarkdownOutlined, ProfileOutlined } from '@ant-design/icons'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import ErrorMessage from 'src/components/ErrorMessage'

const { TextArea } = Input
const { TabPane } = Tabs
const CommentForm: React.FC = () => {
  const [iserror, setIserror] = useState(false)
  const [text, setText] = useState('')

  const onSubmit = () => {
    if (!text.length) {
      setIserror(true)
      return
    }

    setText('')
  }

  const onChange = () => (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    if (iserror) {
      setIserror(false)
    }

    setText(e.target.value)
  }

  return (
    <Tabs>
      <TabPane
        tab={
          <span>
            <FileMarkdownOutlined />
            Write
          </span>
        }
        key="1"
      >
        <StyledForm onFinish={onSubmit}>
          <StyledTextarea
            iserror={iserror ? 1 : 0}
            value={text}
            onChange={onChange()}
            rows={4}
          />
          <InteractionContainer>
            {iserror && <ErrorMessage text={'내용을 입력해주세요.'} />}
            <StyledButton type="primary" htmlType="submit">
              등록
            </StyledButton>
          </InteractionContainer>
        </StyledForm>
      </TabPane>
      <TabPane
        tab={
          <span>
            <ProfileOutlined />
            Preview
          </span>
        }
        key="2"
      >
        <MarkDownContainer className="markdown-body">
          {text ? <ReactMarkdown source={text} /> : '내용을 입력해주세요.'}
        </MarkDownContainer>
      </TabPane>
    </Tabs>
  )
}

const StyledForm = styled(Form)`
  padding: 20px;
`

const InteractionContainer = styled.div`
  display: flex;
  justify-content: space-between;
`

const StyledTextarea = styled(TextArea)<{ iserror: number }>`
  margin-bottom: 10px;
  ${props => {
    if (props.iserror) {
      return `border: 1px solid red;color: red;`
    }
  }}
`

const StyledButton = styled(Button)`
  display: block;
  margin-left: auto;
`

const MarkDownContainer = styled.div`
  border: 1px solid #f0f0f0;
  min-height: 50px;
  padding: 20px;

  font-size: 90%;
`

export default CommentForm
