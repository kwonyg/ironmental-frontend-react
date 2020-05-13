import React from 'react'
import styled from 'styled-components'

// interface Props {}

// TODO: 스타일링 진행하기
const ArchiveArticle: React.FC = () => {
  return (
    <Section>
      <div data-v-5fa65ed6="" data-v-7497ae06="">
        <h1>아카이브 아티클 테스트 페이지</h1>
        <h2>TODO: 스타일링 진행하기</h2>
        <h2 id="stackbasedvm">Stack based VM</h2>
        <p>
          JVM, Python VM 등이 여기에 속한다. operations 및 결과를 스택에
          저장한다. VM이 instruction을 실행하면 가장 최근 값을 스택에서 꺼내고
          작업을 수행한 후 결과를 다시 푸시한다.
        </p>
        <p>
          <strong>장점</strong>
        </p>
        <ul>
          <li>Register based 에 비해 쉽게 구현 가능</li>
          <li>꽤 괜찮은 성능</li>
        </ul>
        <p>
          <strong>단점</strong>
        </p>
        <ul>
          <li>실제 하드웨어 작동 방식과 매핑되지 않음</li>
          <li>많은 instructions 가 필요</li>
        </ul>
        <h2 id="registerbasedvm">Register Based VM</h2>
        <p>
          BEAM VM (Erlang VM), Lua VM, Dalvik VM (Android)가 이 인터프린터에
          속한다.
        </p>
        <p>
          <strong>장점</strong>
        </p>
        <ul>
          <li>실제 하드웨어 작동 방식에 가까움</li>
          <li>뛰어난 성능</li>
        </ul>
        <p>
          <strong>단점</strong>
        </p>
        <ul>
          <li>복잡한 코드</li>
          <li>
            컴파일러를 작성할떄 레지스터 allocation 및 de-allocation 에
            신경써야함
          </li>
        </ul>
        <h2 id="referencefurthermore">Reference &amp; Further more</h2>
        <p>
          <a href="https://blog.subnetzero.io/post/building-language-vm-part-01/">
            So You Want to Build a Language VM
          </a>{' '}
        </p>
        <p>
          <a href="https://markfaction.wordpress.com/2012/07/15/stack-based-vs-register-based-virtual-machine-architecture-and-the-dalvik-vm/">
            Stack based vs Register based Virtual Machine Architecture, and the
            Dalvik VM | Engineering The Code
          </a>
        </p>
      </div>
    </Section>
  )
}

const Section = styled.section`
  margin: 0 auto;
  max-width: 690px;
`
export default ArchiveArticle
