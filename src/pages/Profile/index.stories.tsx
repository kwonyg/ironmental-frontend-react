import React from 'react'
import Profile from '.'
import DefaultLayout from 'src/layouts/DefaultLayout'

export default {
  title: 'pages / Profile Page',
  component: Profile,
}

export const Default: React.FC = () => <DefaultLayout component={Profile} />
