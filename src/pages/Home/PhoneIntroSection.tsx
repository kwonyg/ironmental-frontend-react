import * as React from 'react'
import styled from 'styled-components'
import { images } from 'src/assets/images'

const PhoneIntroSection: React.FC = () => {
  return (
    <Section>
      <Img src={images[0].src} alt={images[0].alt} />
    </Section>
  )
}

const Section = styled.section`
  min-height: 728px;
  text-align: center;
`

const Img = styled.img`
  width: 50%;

  @media (max-width: 1024px) {
    width: 468px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`

export default PhoneIntroSection
