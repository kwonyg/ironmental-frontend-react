import * as React from 'react'
import { images } from '../../assets/images'
import styled from 'styled-components'
// interface Props {}

const PhoneIntroSection: React.FunctionComponent = () => {
  return (
    <section>
      <Img src={images[0].src} alt="" />
    </section>
  )
}

const Img = styled.img`
  width: 100%;
`

export default PhoneIntroSection
