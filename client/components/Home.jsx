import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome to Odd One Out</h1>
      <div>INSTRUCTIONS</div>
      <Link to='/level1'></Link>
    </div>
  )
}

export default Home
