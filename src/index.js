import React from 'react'
import ReactDOM from 'react-dom'

import reactLogo from '../react-logo.png'
import './styles/index.scss'

const App = () => {
  return (
    <div>
      <h1 className="header">Hello from react and WebPack!</h1>
      <img src={reactLogo} className="logo"></img>
    </div>
  )
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)
