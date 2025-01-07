import React, { createContext, useReducer } from 'react';
import axios from 'axios';
import UserReducer from './UserReducer.js';

const token = localStorage.getItem('token') || '';
const user = JSON.parse(localStorage.getItem('user')) || null;

const initialState = {
    token: token,
    user: user,
};

export const UserContext = createContext(initialState);

export const UserProvider = ({ children }) => {
    const [state, dispatch] = useReducer(UserReducer, initialState);

    // Create User Function
    const createUser = async (body) => {
        try {
            await axios.post('http://localhost:3000/users/create', body);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    // Login Function
    const login = async (user) => {
        try {
            const res = await axios.post("http://localhost:3000/users/login", user);
            dispatch({
                type: 'LOGIN',
                payload: res.data,
            });
            if (res.data) {
                localStorage.setItem("token", res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
            }
        } catch (error) {
            console.error("Error logging in:", error);
        }
    };

    const getUserInfo = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.get("http://localhost:3000/users/getinfo", {
            headers: {
                Authorization: token,
            }
        })
        dispatch({
            type: "GET_USER_INFO",
            payload: res.data

        })
    }

    const logout = async () => {
        const token = localStorage.getItem("token");
        const res = await axios.delete("http://localhost:3000/users/logout", {
            headers: {
                Authorization: token,
            }
        });
    
        dispatch({
            type: "LOGOUT"
        });
    
        if (res.data) {
            localStorage.clear();  
        }
    };
    return (
        <UserContext.Provider
            value={{
                token: state.token,
                user: state.user,
                createUser,
                login,
                getUserInfo,
                logout
            }}
        >
            {children}
        </UserContext.Provider>
    );
};



