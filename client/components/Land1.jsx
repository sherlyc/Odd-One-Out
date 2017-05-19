import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'




const Land1 = () => {


document.querySelector("body").style.backgroundImage = url("http://i.imgur.com/oIrFqeV.png")



  return(
    <div className="l">
      <div className="blocks">

      <h1>l  l  l   l  l  l  l  l  l     l  l  l  l  l  l  l  l  l     l  l  l  l  l  l  l</h1>

      <h1>l  l  l  l     l  l  l  l  l  l  l  l  l  l  l  l  l      l  l  l  l  l  l  l  l</h1>

      <h1>l  l  l  l  l  l  l  l  l  l  l  l  l  l  l  l  l     l  l  l  l   l  l  l     l</h1>

      <h1>l  l  l  l  l  l    l  l  l      l  l  l  l  l  l  l  l  <Link to={'/victory'}>|</Link>  l  l      l  l  l  l</h1>


      <h1>l  l    l  l  l  l  l        l  l  l  l  l  l    l  l  l  l  l  l  l  l  l  l  l</h1>

    </div>

  </div>
  )
}

export default Land1
// ADD LINK AROUND |
//ADD AUDIO ON HOVER CLOSE TO |
//FIX ugly background
