import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Logo from './components/Logo'

import routes from './routes'

import './styles/index.scss'

const App = () => {
  return (
    <Router>
      <Header />
      <Logo />
      <div>
        <ul>
          <li>
            <Link to={routes.Home.path}>Home</Link>
          </li>
          <li>
            <Link to={routes.About.path}>About</Link>
          </li>
          <li>
            <Link to={routes.Users.path}>Users</Link>
          </li>
        </ul>
        <Suspense fallback={<h1>Wtf</h1>}>
          <Switch>
            <Route path={routes.Home.path} component={routes.Home.component} exact />
            <Route path={routes.About.path} component={routes.About.component} exact />
            <Route path={routes.Users.path} component={routes.Users.component} exact />
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
