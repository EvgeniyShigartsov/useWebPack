import React from 'react'
import ReactDOM from 'react-dom'

import Header from './components/Header'
import Logo from './components/Logo'

import './styles/index.scss'

const App = () => {
  return (
    <div>
      <Header />
      <Logo />
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
