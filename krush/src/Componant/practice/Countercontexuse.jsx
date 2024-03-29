import React, {createContext, useState} from 'react'
import ChildA from './ChildA';

export const data = createContext();
export const data2 = createContext();


  const Countercontexuse = ({children}) => {
const username = "krushnaaraj"
const [count, setcount] = useState(0)


function  inc (){
  setcount(count+1)
}
function  dec (){
  setcount(count-1)
}
function  res (){
  setcount(0)
}



  return (
    <div>Countercont
<data.Provider value={username}>
  <data2.Provider value={{count,inc, dec, res}}>
      {children}
      </data2.Provider>
      </data.Provider>
    </div>
  )
}

export default Countercontexuse