import * as React from 'react'
import styled from 'styled-components'

// interface Props {}

const TechIntroSection: React.FC = props => {
  return (
    <Section>
      <h2>다양한 기술 상식들이 만나보세요!</h2>
      <LogoContainer>.</LogoContainer>
    </Section>
  )
}

const Section = styled.section`
  text-align: center;
`

const LogoContainer = styled.div``
export default TechIntroSection
