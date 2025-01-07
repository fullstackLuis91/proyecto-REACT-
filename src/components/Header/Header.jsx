import React, { useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../context/UserContext/UserState";
import { Avatar, Space, Button, Badge } from 'antd';
import "./Header.css"; 
import { ProductContext } from "../../context/ProductContext/ProductState";
import {ShoppingCartOutlined} from "@ant-design/icons"

const Header = () => {
    const { user, logout } = useContext(UserContext);
    const {cart} = useContext(ProductContext);

    useEffect(()=>{
        localStorage.setItem("cart",JSON.stringify(cart))
    },[cart]);

    const navigate = useNavigate();

    const logoutUser = () => {
        logout(); 
        navigate("/Login"); 
    }

    return (
        <div className="header">
            <Link to="/Home" className="header-link">Home</Link> /
            <Link to="/Products" className="header-link">Products</Link> /
            {user ?
                <>
                    <Link to="/Cart" className="header-link">
                    <Badge count={cart.length}>
                    </Badge>
                    <ShoppingCartOutlined /></Link> /
                    <Link to="/Profile" className="header-link">
                        Profile
                        <Space size={16} wrap>
                            <Avatar>{user.firstName[0]}</Avatar>
                        </Space>
                    </Link> /
                    <Button onClick={logoutUser} className="header-link ant-btn">Logout</Button>
                </>
                :
                <>
                    <Link to="/Register" className="header-link">Register</Link> /
                    <Link to="/Login" className="header-link">Login</Link> /
                </>
            }
        </div>
    )
}

export default Header;
