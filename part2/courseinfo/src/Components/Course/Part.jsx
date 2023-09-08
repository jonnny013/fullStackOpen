import React from 'react'

const Part = ({text}) => {
  return (
    <div>
        <p>{text.name} {text.exercises}</p>
    </div>
  )
}

export default Part