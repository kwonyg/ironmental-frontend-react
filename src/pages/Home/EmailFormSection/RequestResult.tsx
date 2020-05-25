import React from 'react'
import styled from 'styled-components'
import Lottie from 'react-lottie'
import { useLockBodyScroll } from 'src/hooks'
import confirm from 'src/assets/animations/confirm.gif'

// interface Props {}

// INFO: sendEmail 결과 컴포넌트
const RequestResult: React.FC = () => {
  useLockBodyScroll()
  return (
    <RequestResultContainer>
      구우우도오옥중
      <img src={confirm} alt="" />
    </RequestResultContainer>
  )
}

const RequestResultContainer = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #fff;
`
export default RequestResult
