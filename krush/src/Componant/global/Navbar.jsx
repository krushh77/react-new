import React from 'react'

const Navbar = () => {
  return (
    <div style={{display: "flex", justifyContent: "space-around"}}>

        <div  >home</div>
        <div>
            <button> dark theme</button>
            <button>light theme</button>
        </div>
    </div>
  )
}

export default Navbar