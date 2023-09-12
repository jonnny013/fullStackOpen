import React from 'react'

const People = (props) => {
  return (
    <>
        <li>{props.person} {props.number}</li>
    </>
  )
}

export default People