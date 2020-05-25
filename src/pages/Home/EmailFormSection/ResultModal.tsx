import React from 'react'
import { Button } from 'antd'
import styled from 'styled-components'
import Lottie from 'react-lottie'
import { useLockBodyScroll } from 'src/hooks'
import confirmAnimation from 'src/assets/animations/confirm.json'
import exclamationAnimation from 'src/assets/animations/exclamation.json'
import loadingAnimation from 'src/assets/animations/loading.json'
interface Props {
  closeResult: () => void
}

// INFO: sendEmail 결과 컴포넌트
const RequestResult: React.FC<Props> = ({ closeResult }) => {
  // useLockBodyScroll()
  return (
    <RequestResultContainer>
      <Lottie
        options={{
          animationData: loadingAnimation,
          autoplay: true,
        }}
        height={400}
        width={400}
      />

      {/* <Lottie
        options={{
          animationData: confirmAnimation,
          autoplay: true,
        }}
        height={400}
        width={400}
      ></Lottie> */}

      {/* {
        <Lottie
          options={{ animationData: exclamationAnimation }}
          height={350}
          width={350}
          // style={{ margin: '100px 105px' }}
        ></Lottie>
      } */}
      <p>구독 신청이 완료되었습니다. 이메일을 확인해주세요!</p>
      <Button onClick={closeResult}>확인</Button>
    </RequestResultContainer>
  )
}

const RequestResultContainer = styled.div`
  padding: auto 0;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 100%;
  background-color: #fff;
  text-align: center;
`

export default RequestResult
