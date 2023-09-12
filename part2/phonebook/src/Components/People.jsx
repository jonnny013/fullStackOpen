import React from 'react'

const People = (props) => {
    console.log(props)
  return (
    <>
        <li>{props.person}</li>
    </>
  )
}

export default People