import React from 'react'
import Emoji from './Emoji'
import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <Router>
      <h1>Odd One Out</h1>
      <hr></hr>
      <div className='content'>
        <Route exact={true} path='/' component={Home}/>
        <Route path='/level1' component={Emoji}/>
        <Route path='/level2' component={Faces}/>
        <Route path='/level3' component={Dolphins}/>
        <Route path='/level4' component={Land1}/>
      </div>
    </Router>
  )
}

export default App
