import React from 'react'

function Message({type , message}) {
  return (
    <div className={`alert alert-${type} text-center p-1 rounded-0`} role="alert">
        {message}
    </div>
  )
}

export default Message
