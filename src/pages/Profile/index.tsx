import React from 'react'
import { Divider } from 'antd'
import styled from 'styled-components'
import UserInfo from './UserInfo'
import ActivityInfo from './ActivityInfo'

const Profile: React.FC = () => {
  return (
    <Section>
      <UserInfo />
      <Divider />
      <ActivityInfo />
      <Divider />
    </Section>
  )
}

const Section = styled.section`
  padding: 80px 20px;
`

export default Profile
