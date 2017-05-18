import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Thomasin from './Thomasin'

const App = () => {
  return (
    <Router>
    <span>
    <Route path='/thomasin' component={Thomasin} />
    </span>
    </Router>
  )
}

export default App
