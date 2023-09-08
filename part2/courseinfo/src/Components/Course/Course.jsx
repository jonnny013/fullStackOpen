import React from 'react'
import Header from './Header'
import Part from './Part'
import Content from './Content'


const Course =({course}) => {
  return (
    <>
        <Header title={course.name}/>
        <Content info={course.parts}/>
    </>
  )
}

export default Course