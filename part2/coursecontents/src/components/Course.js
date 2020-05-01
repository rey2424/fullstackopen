import React from 'react'


const Part = (props) => {
    return (
      <p >
        {props.part.name} {props.part.exercises}
      </p>    
    )
  }
  
  const Total = ({ course }) => {
    const sum = course.parts.reduce((acc, s) => {
      return acc + s.exercises
      }, 0)
  
    return(
      <p><b>total of {sum} exercises </b></p>
    ) 
  }
  
  
  const Content = ({ course }) => {
    
   
        return (
          course.parts.map(x =>  <Part part={x} key={x.id}/>
        )
      )
           
  }
  
  const Header = ({course} ) => {
    return (
      <h2>{course.name}</h2>
    )
  }
  
  
const Course = ({course}) => {
    return (
      <div>
      <Header course={course} />
      <Content course={course} />
      <Total course={course} />
      </div>
    )
  }


export default Course