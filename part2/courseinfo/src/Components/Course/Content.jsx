import React from 'react'
import Part from './Part'
import Sum from './Sum';

const Content = ({info}) => {
  return (
    <>
      {info.map((part) => (
        <Part key={part.id} text={part} />
      ))}
      <Sum number={info} />
    </>
  );
}

export default Content