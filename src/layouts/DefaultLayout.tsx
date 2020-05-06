import React from 'react'
import { Route } from 'react-router-dom'
import { Layout } from 'antd'
import Header from '../components/Header'

type Props = {
  component: React.FC
  [rest: string]: any
}
const DefaultLayout: React.FC<Props> = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <Layout>
          <Header />
          <Content>
            <Component {...matchProps} {...rest} />
          </Content>
        </Layout>
      )}
    />
  )
}

const { Content } = Layout

export default DefaultLayout
