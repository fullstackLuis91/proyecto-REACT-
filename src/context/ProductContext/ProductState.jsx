import  { createContext , useReducer } from 'react'
import ProductReducer from "./ProductReducer"
import axios from  "axios"



const initialState = {
  products: []
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
    
      return (
        <ProductContext.Provider
          value={{
            products: state.products,
            getProducts,
          }}
        >
          {children}
        </ProductContext.Provider>
      );
    };
    
    
  
