import React from 'react'
import { BrowserRouter, Switch } from 'react-router-dom'
import DefaultLayout from './layouts/DefaultLayout'
import Home from './pages/Home'
import Archive from './pages/Archive'
import ArchiveArticle from './pages/ArchiveArticle'
import Error from './pages/Error'
import { routePath } from './constants'

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <DefaultLayout path={routePath.HOME} component={Home} exact={true} />
        <DefaultLayout
          path={routePath.ARCHIVES}
          component={Archive}
          exact={true}
        />
        <DefaultLayout
          path={routePath.ARCHIVE_ARTICLE}
          component={ArchiveArticle}
        />
        <DefaultLayout path="*" component={Error} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
