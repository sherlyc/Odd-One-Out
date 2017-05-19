import React from 'react'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Welcome to Odd One Out</h1>
      <div>Find the odd one out!</div>
      <Link to='/level1' style={{ textDecoration: 'none' }}><button className="play">PLAY</button></Link>
    </div>
  )
}

export default Home
