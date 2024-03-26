import React from 'react'

export default function Button({title, color, onClick}) {
  return (
    <button style={{background: color}} onClick={onClick}>
      {title}  
    </button>
  )
}
