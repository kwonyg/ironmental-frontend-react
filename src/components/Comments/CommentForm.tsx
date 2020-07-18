import React, { useState } from 'react'
import { Tabs, Button, Form } from 'antd'
import { FileMarkdownOutlined, ProfileOutlined } from '@ant-design/icons'
import ReactMarkdown from 'react-markdown'
import styled from 'styled-components'
import ErrorMessage from 'src/components/ErrorMessage'
import MentionTextField from 'src/components/MentionTextField'

const { TabPane } = Tabs

const CommentForm: React.FC = () => {
  const [iserror, setIserror] = useState(false)
  const [form] = Form.useForm()
  const [text, setText] = useState('')

  const onReset = () => {
    form.resetFields()
    setText('')
  }

  const onSubmit = () => {
    if (!text.length) {
      setIserror(true)
      return
    }

    onReset()
  }

  const onChange = () => {
    setText(form.getFieldValue('text'))

    if (iserror) {
      setIserror(false)
    }
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
        <StyledForm form={form} onFinish={onSubmit}>
          <StyledFormItem iserror={iserror ? 1 : 0} name="text">
            <MentionTextField
              onChange={onChange}
              rows={3}
              placeholder={'@를 사용하여 유저를 레퍼런스 할 수 있습니다.'}
            />
          </StyledFormItem>

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

const StyledFormItem = styled(Form.Item)<{ iserror: number }>`
  margin-bottom: 5px;
  ${props => {
    if (props.iserror) {
      return `border: 1px solid red;color: red;`
    }
  }}
`

const InteractionContainer = styled.div`
  display: flex;
  justify-content: space-between;
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
