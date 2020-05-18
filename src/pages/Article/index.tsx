import React from 'react'
import styled from 'styled-components'
import TagList from '../../components/TagList'
// interface Props {}

// TODO: 스타일링 진행하기
const Article: React.FC = () => {
  return (
    <Section>
      <Head>
        <h1> 아티클 테스트 페이지</h1>
        <Date>Nov. 13. 2020.</Date>
      </Head>
      <main>이건 개 좋은 뉴스야</main>
    </Section>
  )
}

const Section = styled.section`
  margin: 0 auto;
  padding: 16px;
  max-width: 690px;
`
const Head = styled.div`
  margin-bottom: 60px;
`

const Date = styled.div``

export default Article
