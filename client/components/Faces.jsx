import React from 'react'
import {Link} from 'react-router-dom'

class Faces extends React.Component {
  constructor(props) {
    super(props)
    let kanyeGrow = Math.round(Math.random() * 4) + 2
    let kanyeSpin = Math.round(Math.random() * 360)
    let left = Math.round(Math.random() * (window.innerWidth - kanyeGrow))
    let top = Math.round(Math.random() * (window.innerHeight - kanyeGrow))
    this.state = {
      style: {
        posititon: 'absolute',
        marginLeft: left.toString(),
        marginTop: top.toString(),
        opacity: '0.9',
        width: kanyeGrow.toString() + 'vh',
        height: kanyeGrow.toString() + 'vh',
        transform: `rotate(${kanyeSpin.toString()}deg)`
      }
    }
  }

render(){
  var kanye = <Link to='/victory' ><img className="kanye" src='kanye.png' style={this.state.style}/></Link>

document.querySelector("body").style.background='url(beans.jpg)'
document.querySelector("body").style.backgroundSize='25% 33%'

  return (
    <div>{kanye}</div>
  )
  }
}

export default Faces
