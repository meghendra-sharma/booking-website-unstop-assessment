import React from 'react'

function Spinner() {
  return (
    <div className="text-center text-light">
  <div className="spinner-border spinner-border-sm" role="status">
    <span className="visually-hidden">Loading...</span>
  </div>
</div>
  )
}

export default Spinner
