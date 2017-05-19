import React from 'react'

const Emoji = () => {
  return (
    <div>
      <div>Welcome to Emoji Land</div>
      <div>Find the x on the page</div>
      {generateEmojis()}
    </div>
  )
}

function generateEmojis () {
    return <div>BOO</div>
}
export default Emoji
