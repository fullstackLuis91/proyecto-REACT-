import  { createContext , useReducer } from 'react'
import ProductReducer from "./ProductReducer"
import axios from  "axios"

const cart =JSON.parse(localStorage.getItem("cart")) || []

const initialState = {
  products: [],
  cart: cart
}


export const ProductContext  = createContext(initialState)

export const ProductProvider = ({children}) => {
    const [state, dispatch] = useReducer(ProductReducer, initialState)

    const getProducts = async () => {
        const res = await axios.get("http://localhost:3000/products/getAll")
        dispatch({
          type: "GET_PRODUCTS",
          payload: res.data,
        });
      };

      const addCart =(product)=>{
        dispatch({
          type:"ADD_CART",
          payload:product    

        })

      }

      const clearCart=()=>{
        dispatch({
          type:"CLEAR_CART"
        })
      }
    
      return (
        <ProductContext.Provider
          value={{
            products: state.products,
            cart:state.cart,
            getProducts,
            addCart,
            clearCart
          }}
        >
          {children}
        </ProductContext.Provider>
      );
    };
    
    
  
