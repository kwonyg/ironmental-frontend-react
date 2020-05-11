import React, { useState, useEffect, useRef } from 'react'
import styled from 'styled-components'
import { Row, Col } from 'antd'
import { icons } from '../../assets/icons'
import { fadeInUp } from '../../styles/animations'

// interface Props {}

const TechIntroSection: React.FC = props => {
  const [showIcons, setShowIcons] = useState(false)

  const TechIcons = icons.map((icon, index) => (
    <Col span={6} key={icon.title}>
      <Img src={icon.src} alt={icon.alt} delay={0.2 * index} />
    </Col>
  ))
  const observerEl = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      const target = entries[0]
      if (target.isIntersecting) {
        setShowIcons(true)
        observer.unobserve(observerEl.current as Element)
      }
    })

    observer.observe(observerEl.current as Element)
  })

  return (
    <Section>
      <h2 ref={observerEl}>다양한 기술 상식들이 만나보세요!</h2>
      {showIcons && <Row gutter={[24, 24]}>{TechIcons}</Row>}
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
