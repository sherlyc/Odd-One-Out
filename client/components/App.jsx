import React from 'react'
import Home from './Home'
import Emoji from './Emoji'
import {HashRouter as Router, Route} from 'react-router-dom'
import Dolphins from './Dolphins'

const App = () => {
  return (
    <Router>
            <div>
              <Route exact={true} path='/' component={Home}/>
              <Route path='/level1' component={Emoji}/>
              <Route path='/level3' component={Dolphins} />
            </div>
    </Router>
  )
}

export default App
