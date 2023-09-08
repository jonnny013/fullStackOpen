import React from 'react'
import Header from './Header'
import Part from './Part'
import Content from './Content'


const Course =({course}) => {
  return (
    <>
      <h1>Web Dev Curriculum</h1>
      <Header title={course[0].name} />
      <Content info={course[0].parts} />
      <Header title={course[1].name} />
      <Content info={course[1].parts} />
    </>
  );
}

export default Course