import React from 'react'
import {Link} from 'react-router-dom'

const Emoji = () => {
  return (
    <div>
      <h1>Welcome to Emoji Land</h1>
      <div className='emoji'>{generateEmojis()}</div>
    </div>
  )
}

function generateEmojis () {
    return <div>{tongueEmojis()}</div>
}

function tongueEmojis () {
    var tongues = []
    for (var i=0; i < 1917; i ++){
        tongues.push(<img id={i} img src='/Emoji/tounge.png'/>)
    }
    tongues[213] = <Link to='/level2'><img id={i} img src='/Emoji/wink.png'/></Link>
    return tongues
}
export default Emoji
