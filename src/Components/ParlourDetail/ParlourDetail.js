import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Navbar from '../Navbar/Navbar'
import Loader from '../Loading/Loader'
const ParlourDetail = () => {
  const [product, setProduct] = useState([])
  const [loading, setLoading] = useState(false)

  const { Id } = useParams()

  useEffect(() => {
    const getProduct = async () => {
      setLoading(true)
      const response = await fetch(`https://fakestoreapi.com/products/${Id}`)
      setProduct(await response.json());
      setLoading(false)
    }
    getProduct()
  }, [Id]);

  useEffect(() => {
    document.title = product.title;
  }, [product.title]);

  const ShowParlour = () => {
    return (
      <div>
        <img src={product.image} alt="" />
        <h1>{product.title}</h1>
        <p>{product.description}</p>
        <button>Add to cart</button>
      </div>
    )
  }

  return (
    <>
      <Navbar />

      {loading ? <Loader /> : <ShowParlour />}
    </>

  )
}

export default ParlourDetail;