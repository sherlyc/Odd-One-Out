import React from 'react'

class Thomasin extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    var rowNum = Math.floor(window.innerHeight/20);
    var columnNum = Math.floor(window.innerWidth/20);

    var randomWhaleCol = Math.floor(Math.random() * columnNum)
    var randomWhaleRow = Math.floor(Math.random() * rowNum)

    document.querySelector("body").style.backgroundColor = 'hotpink'
    document.querySelector("body").style.margin = '0'
    document.querySelector("body").style.cursor = 'pointer'

    var whaleArray = Array(rowNum).fill(0).map(x => Array(columnNum).fill(<img src='whale.png' className='thomasin'/>))
    whaleArray[randomWhaleRow][randomWhaleCol] = <img className='thomasin' src='dolphin.png'/>
    
    return (
      <div>
      {whaleArray}
      </div>
    )
  }
}

export default Thomasin
