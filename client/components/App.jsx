import React from 'react'
import Land1 from './Land1'
import Home from './Home'
import Emoji from './Emoji'
import Victory from './Victory'
import Faces from './Faces'
import {HashRouter as Router, Route} from 'react-router-dom'
import Dolphins from './Dolphins'

const App = () => {
  return (
    <Router>
        <div>
              <Route exact={true} path='/' component={Home}/>
              <Route path='/level1' component={Emoji}/>
              <Route path='/level2' component={Land1}/>
              <Route path='/level3' component={Dolphins} />
              <Route path='/level4' component={Faces}/>
              <Route path='/victory' component={Victory}/>
        </div>
    </Router>
  )
}

export default App
