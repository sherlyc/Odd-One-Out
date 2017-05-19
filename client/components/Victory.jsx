import React from 'react'

const Victory = () => {
  return (
    <div>
      <h1>Congratulations!</h1>
          <audio autoPlay>
          <source src="scream.mp3" type="audio/mpeg"/>
              Your browser does not support the audio tag.
         </audio>
      <img id='victory' src='/sherly.jpg'></img>
    </div>
  )
}

export default Victory
