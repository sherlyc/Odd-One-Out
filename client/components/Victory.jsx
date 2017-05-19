import React from 'react'

const Victory = () => {
  document.querySelector("body").style.backgroundImage = "none"
  document.querySelector("body").style.backgroundColor = "white"
  return (
    <div>
      <h1>Congratulations!</h1>
      <img id='victory' src='/sherly.jpg'></img>
    </div>
  )
}

export default Victory
