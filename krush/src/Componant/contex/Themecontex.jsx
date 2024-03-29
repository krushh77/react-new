import React, { createContext, useContext } from 'react'

export const AuthContexts = createContext();

const reducer = (state, action) => {

switch(action.type){
  case "dark" : 
  return
  case "light" :
    return
}

}

const initialstate = {}




const authnewcontexc = () =>{
    const [state, dispatch] = useContext(reducer, initialstate)

}

function dark (){
  dispatch ( {type:dark,})
}



const Themecontex = () => {
  return (
    <div>Themecontex</div>
  )
}

export default Themecontex