import React, { Component } from 'react'
import io from 'socket.io-client'

import _debug from 'debug'
const debug = _debug('app:App') // eslint-disable-line
const debugSocket = _debug('app:socket')

import './App.css'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
    }
    this.socket = io.connect('http://localhost:10220')
    this.socket.on('connected', function () {
      debugSocket('on "connected"')
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='App-header'>
          <h2>App Header</h2>
        </div>
        <p className='App-intro'>
          App Intro
        </p>
      </div>
    )
  }
}

export default App
