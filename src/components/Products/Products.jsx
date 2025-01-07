import React, { useContext, useEffect } from "react"
import { ProductContext } from "../../context/ProductContext/ProductState"
import "./Products.scss"
import { Button } from "antd"
import {ShoppingCartOutlined} from "@ant-design/icons"


const Products = () => {
    const {products , getProducts,addCart} = useContext (ProductContext)
    useEffect( () => {

        getProducts ()

    }, [] )

  return (
    <div className="container">{

      products.map(product =>{
        console.log(product)
        return <div key ={product.id}>
          <p>{product.name}</p>
          <p>{product.price}€</p>
          <Button onClick={()=>addCart(product)}><ShoppingCartOutlined />Buy Bike</Button>
          </div>
      })
      
      }</div>
  )
}

export default Products