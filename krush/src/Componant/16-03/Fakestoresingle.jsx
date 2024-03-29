import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Fakestoresingle = () => {
    const [productData, setProductData] = useState({})
    const { id } = useParams()
    console.log({id}, "useparam")

    async function getSingleProductData() {
        try {
            const response = await axios.get(`https://fakestoreapi.com/products/${id}`) // 1 2 3 4
            setProductData(response.data)
        } catch (error) {
            console.log(error)
        }
    }




    useEffect(() => {
        if (id) {
            getSingleProductData();
        }
    }, [id])
    return (
        <div>
            <img src={productData?.image} alt='image' />
            <h1>{productData?.title}</h1>
        </div>
    )
}

export default Fakestoresingle