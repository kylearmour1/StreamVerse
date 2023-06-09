import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/mutations';

import Auth from '../../utils/auth';

import './Login.css';


const Login = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION
    // , {
    // onCompleted({ login }) {
    //   if (login) {
    //     console.log(login);
    //   }
    // },
  // }
  );

  const handleSubmit = async (event) => {
    event.preventDefault();
    // login({ variables: { username, password } });
    try {
      const { data } = await login({
        variables: { username, password},
      });
      Auth.login(data.login.token);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <div className="login-container"> 
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            className="login-input" 
            name={username}
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            className="login-input" 
            name={password}
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="login-button" type="submit">Login</button> 
      </form>
      {loading && <p>Loading...</p>}
      {error && <p>Error :( Please try again</p>}
    </div>
  );
  
};

export default Login;
