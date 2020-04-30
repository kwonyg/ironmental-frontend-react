import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
// import 'swiper/swiper.scss'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'

function App() {
  // TODO: history 객체 사용여부 판단하기
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout path="/" component={Home} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
