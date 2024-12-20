import { BrowserRouter, Route, Routes } from "react-router-dom"
import "./App.css"
import Products from "./components/Products/Products"
import { ProductProvider } from "./context/ProductContext/ProductState"
import Register from "./components/register/Register"
import Header from "./components/Header/Header";
import { UserProvider } from "./context/UserContext/UserState"
import Login from "./components/Login/Login"
import Profile from "./components/Profile/Profile"

function App() {

  return (
    <>
      <BrowserRouter>
        <ProductProvider>
          <UserProvider>
            <Header />
            <Routes>

              <Route path="/Products" element={<Products />} />
              <Route path="/Register" element={<Register />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Profile" element={<Profile />} />
                

            </Routes>
          </UserProvider>
        </ProductProvider>
      </BrowserRouter>
    </>
  )
}

export default App
