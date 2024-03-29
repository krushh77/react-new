import React from 'react'

const Allproducts = (props) => {
    const { products } = props;
    console.log(products , "product")
  return (
    <div>
        <h1>Allproducts</h1>
        <div style={{ display: 'flex', flexWrap: "wrap", justifyContent: 'space-around' }}>
        {products.map((productobj)=> (
            <div style={{ width: "18%", border: "2px solid black", height: "250px" }}>
                <img  style={{ height: "70%", width: '100%' }}  src={productobj.Image}/>
                <h1>{productobj.name}</h1>
                 </div>

         ))}
        </div>
    </div>
  )
}

export default Allproducts;