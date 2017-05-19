import React from 'react'
import {Link} from 'react-router-dom'

class Dolphins extends React.Component {
  constructor(props) {
    super(props)
    this.timer = null
  }

  shakeConstant(evt) {
    evt.target.classList.add("shake-constant")
  }

  randomShake() {
    var rowNum = Math.floor(window.innerHeight/15);
    var columnNum = Math.floor(window.innerWidth/15);

    var randomWhaleCol = Math.floor(Math.random() * columnNum)
    var randomWhaleRow = Math.floor(Math.random() * rowNum)
    document.getElementsByClassName("whale").item(randomWhaleCol * randomWhaleRow).classList.add("shake-constant")
  }

  componentDidMount() {
    this.timer = setInterval(this.randomShake, 200)
  }

  componentWillUnmount() {
    clearInterval(this.timer)
  }

  render() {
    var rowNum = Math.floor(window.innerHeight/15);
    var columnNum = Math.floor(window.innerWidth/15);

    var randomWhaleCol = Math.floor(Math.random() * columnNum)
    var randomWhaleRow = Math.floor(Math.random() * rowNum)

    document.querySelector("body").style.backgroundColor = 'hotpink'
    document.querySelector("body").style.margin = '0'
    document.querySelector("body").style.cursor = 'pointer'

    var whaleArray = Array(rowNum).fill(0).map(x => Array(columnNum).fill(<img src='whale.png' className='whale thomasin shake shake-hard' onMouseOver={this.shakeConstant} />))
    whaleArray[randomWhaleRow][randomWhaleCol] = <Link to="/level4"><img className='thomasin shake shake-hard' src='dolphin.png' onMouseOver={this.shakeConstant} /></Link>

    return (
      <div>
      {whaleArray}
      </div>
    )
  }
}

export default Dolphins
