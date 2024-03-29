import React from 'react'
import Children from './Children'
import Counter from '../02-03/Counter'

const Propsdrilling = ({student, counter}) => {
    console.log(counter, "counter")
    console.log(student, "student")
  return (
    <div><Children student={student} counter={Counter}/></div>
  )
}

export default Propsdrilling