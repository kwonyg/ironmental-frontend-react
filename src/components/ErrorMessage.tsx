import React from 'react'
import styled from 'styled-components'

interface Props {
  text: string
}

const ErrorMessage: React.FunctionComponent<Props> = ({ text }) => {
  return <StyledDiv>{text}</StyledDiv>
}

const StyledDiv = styled.div`
  color: red;
`

export default ErrorMessage
