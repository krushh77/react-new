import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const Notfound = () => {
 const router = useNavigate()
 



    useEffect (()=> {
 setTimeout(()=> {router('/')}, 3000)

        

    }, [])
  return (
    <div>
        
        <h1>page not found</h1>
        <h2>Redirecting you in home page in 3 sec....</h2>
    </div>
  )
}

export default Notfound