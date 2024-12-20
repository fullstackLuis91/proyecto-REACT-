import React, { useContext, useEffect } from "react"
import { ProductContext } from "../../context/ProductContext/ProductState"
import "./Products.scss"



const Products = () => {
    const {products , getProducts} = useContext (ProductContext)
    useEffect( () => {

        getProducts ()

    }, [] )

  return (
    <div>{

      products.map(product =>{
        console.log(product)
        return <div key ={product.id}>
          <p>{product.name}</p>
          <p>{product.price}€</p>
          </div>
      })
      
      }</div>
  )
}

export default Products