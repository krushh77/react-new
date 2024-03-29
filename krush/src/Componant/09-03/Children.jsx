import React from 'react'

const Children = ({student, counter}) => {
  console.log(student,"student")
  // console.log(counter, "counter")
  return (
    <div>Children
      <h1>{counter}</h1>
      <div>{student.map((std)=> (
        <h1>{std}</h1>
      ))}</div>
    </div>
  )
}

export default Children