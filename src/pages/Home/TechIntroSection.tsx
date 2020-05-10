import * as React from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { icons } from '../../assets/icons'
import { fadeInUp } from '../../styles/animations'
// interface Props {}

const TechIntroSection: React.FC = props => {
  return (
    <Section>
      <h2>다양한 기술 상식들이 만나보세요!</h2>
      <Row gutter={[24, 24]}>
        {icons.map((icon, index) => (
          <Col span={6} key={icon.title}>
            <Img src={icon.src} alt={icon.alt} delay={0.2 * index} />
          </Col>
        ))}
      </Row>
    </Section>
  )
}

const Section = styled.section`
  text-align: center;
`

const Img = styled.img<{ delay: number }>`
  width: 50px;
  ${props => fadeInUp(props.delay)}
`

export default TechIntroSection
