import React from 'react'

const Sum = ({number}) => {
  const sum = number.reduce((add, number) =>  add + number.exercises, 0 )
  return(
    <div>
        <p>Total number of exercises: {sum}</p>
    </div>
  )
}

export default Sum