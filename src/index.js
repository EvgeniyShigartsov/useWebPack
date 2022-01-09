import React, { Suspense } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

import Header from './components/Header'
import Logo from './components/Logo'

import Home from './components/Home'
import About from './components/About'
import Users from './components/Users'

import routes from './routes'

import './styles/index.scss'

const App = () => {
  return (
    <Router>
      <Header />
      <Logo />
      <p>some</p>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
            {/* <li>
                <Link to={routes.Home.path}>Home</Link>
              </li>
              <li>
                <Link to={routes.About.path}>About</Link>
              </li>
              <li>
                <Link to={routes.Users.path}>Users</Link>
              </li> */}
          </ul>
        </nav>
        <Switch>
          <Route path="/">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/users">
            <Users />
          </Route>
          {/* <Route path={routes.Home.path} component={routes.Home.component} />
            <Route path={routes.About.path} component={routes.About.component} />
            <Route path={routes.Users.path} component={routes.Users.component} /> */}
        </Switch>
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
