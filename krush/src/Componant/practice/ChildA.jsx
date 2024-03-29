import React, { useContext } from 'react'
import { data, data2 } from './Countercontexuse'

const ChildA = () => {
 const abc = useContext(data)

 const {count, inc , dec , res} = useContext(data2)


  return (
    <div>ChildA
        <h1>{count}</h1>
        <button onClick={inc}>+</button>
        <button onClick={dec}>-</button>
        <button onClick={res}>reset</button>
        {abc}
    </div>
  )
}

export default ChildA