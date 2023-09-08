import React from 'react'
import Part from './Part'

const Content = ({info}) => {
    console.log(info)
  return (
    <>
      {info.map((part) => <Part key={part.id}text={part} />)}
    </>
  );
}

export default Content