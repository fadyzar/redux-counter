import React from 'react';
import "./Header.css"
import {  useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { authActions } from '../store/store';
const Header = () => {
    const isAuth = useSelector(state => state.auth.isAuthenticated)
    const dispatch = useDispatch()

    const logoutHandler = () =>{
        dispatch(authActions.logout())
    }
  return (
    <>
    {isAuth &&  
    <nav>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Services</a></li>
        <li><a onClick={logoutHandler} href="#">Logout</a></li>
      </ul>
    </nav>
    }
    
    </>
  );
  
};


export default Header;
