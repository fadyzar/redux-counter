import React, { useState } from 'react'
import './Auth.css'
import { useDispatch } from 'react-redux';
import { authActions } from '../store/store';
export const Auth = () => {
const dispatch = useDispatch();
const [username, setUsername] = useState('');
const [password, setPassword] = useState('');


const handleSubmit = (event) => {

  event.preventDefault();
  dispatch(authActions.login())
 
};

return (
  <div>
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
);
};

export default Auth;