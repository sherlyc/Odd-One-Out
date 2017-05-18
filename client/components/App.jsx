import React from 'react'
import Home from './Home'
import Emoji from './Emoji'
import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
        <div>
            <h1>Odd One Out</h1>
            <hr></hr>
            <div className='content'>
              <Route exact={true} path='/' component={Home}/>
              <Route path='/level1' component={Emoji}/>
            </div>
        </div>
    </Router>
  )
}

export default App
