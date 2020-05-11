import * as React from 'react'
import styled from 'styled-components'

const Responsive: React.FC = ({ children, ...rest }) => {
  return <ResponsiveContainer {...rest}>{children}</ResponsiveContainer>
}

const ResponsiveContainer = styled.div`
  width: 1024px;
  margin: 0 auto;

  @media (max-width: 1024px) {
    width: 768px;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`
export default Responsive
