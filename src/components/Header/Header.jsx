import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { UserContext } from '../../context/UserContext/UserState'
import { Avatar, Space, Button } from 'antd';

const Header = () => {
    const { user, logout } = useContext(UserContext)



    return (
        <div>
            <Link to="/">Home</Link> /
            <Link to="/Products">Products</Link> /
            {user ?
                <>

                    <Link to="/Profile">Profile<Space size={16} wrap>
                        <Avatar>{user.firstName[0]}</Avatar>
                    </Space>
                    </Link> /
                    <Link to="/">       
                     <Button onClick={logout}>logout</Button>
                    </Link>

                </>
                :
                <>
                    <Link to="/Register">Register</Link> /
                    <Link to="/Login">Login</Link> /
                </>



            }








        </div>
    )
}

export default Header