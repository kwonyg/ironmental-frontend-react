import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Navigation: React.FC = () => {
  return (
    <Nav>
      <Logo className="logo">IronMental</Logo>
      <Menu>
        <MenuItem>
          <ItemLink to="/">홈</ItemLink>
        </MenuItem>
        <MenuItem>
          <ItemLink to="/">아카이브</ItemLink>
        </MenuItem>
      </Menu>
    </Nav>
  )
}

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
`
const Logo = styled.div`
  color: #000;
  font-size: 1.2rem;
`

const Menu = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
`
const MenuItem = styled.li`
  margin: 0 10px;
`

const ItemLink = styled(Link)`
  text-decoration: none;
  color: #000;
`

export default Navigation
