import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const Fakestore = () => {

    const [allproducts, setallproducts] = useState([]);
      // console.log(allproducts, "allproducts")

      const router = useNavigate();
 
    
         async function getProducts() {
          // api call
          // alert("Jiii")
          try {
              const response = await axios.get('https://fakestoreapi.com/products');
              // console.log(response, "response from fakestore api")
              if (response?.data.length) {
                  setallproducts(response.data)
              }
  
          } catch (error) {
              console.log(error)
          }
      }
         function redirect(id) {

          router(`/fakesingleproduct/${id}`)
      }
      useEffect(() => {
        getProducts()
    }, [])
  return (
    <div>
        <h1>Fakestore</h1>
    {allproducts?.length? <div  style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around' }}>
        {allproducts.map((productobj) => (
            <div  onClick={()=> redirect(productobj.id)} style={{ width: "18%", border: "2px solid black", height: "250px" }}>
                <img style={{ height: "70%", width: '100%' }} src={productobj.image}/>
                <h1>{productobj.title}</h1>
            </div>
        ))}
    </div> :<div>loading...</div>}

    </div>
  )
  }

export default Fakestore