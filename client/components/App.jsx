import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Land1 from './Land1'


const App = () => {
  return (
    <Router>
      <div>
        <Route path='/' component={Land1}/>
      </div>
    </Router>
  )
}

export default App
