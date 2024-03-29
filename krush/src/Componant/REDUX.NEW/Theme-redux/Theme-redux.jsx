import React from "react";

import {useDispatch, useSelector} from 'react-redux'

import { light, dark } from "../Action-theme/Action-theme";

const Themeredux = () =>{   
    const theme= useSelector((state)=>state.theme.theme)
    const dispatch=useDispatch()
    return(
        <div style={theme}>
            <div style={{height:"1000px"}}>
      <h2>theme redux</h2>
      <button  onClick={()=>dispatch(light())}>
        <p onClick={()=> dispatch(dark())}>light</p>
      </button>
      <button onClick={()=>dispatch(dark())}>
      <p onClick={()=> dispatch(dark())}>dark</p>
      </button>
      </div>
        </div>
    )

}
export default Themeredux