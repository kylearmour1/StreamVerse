import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/mutations';
import { useHistory } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  
  const [login, { error, data }] = useMutation(LOGIN_MUTATION);
  //   , {
  //   onCompleted: ({ login }) => {
  //     console.log('Completed!, ', login);
  //     history.push('/home');
  //     // store the use id or token for later jwt use
  //     // redirect to home page
  //     // maybe setState of signedIn = true?
  //   }
  // }
  
    
    

 

  const handleSubmit = async (event) => {
    event.preventDefault();
    login({ variables: { username, password } });
  };

  return (
    <div className="login-container"> 
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        
        <label>
          Username:
          <input
            className="login-input" 
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <label>
          Password:
          <input
            className="login-input" 
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button className="login-button" type="submit">Login</button> 
      </form>
      {/* {loading && <p>Loading...</p>}
      {error && <p>Error :( Please try again</p>} */}
    </div>
  );
  
};

export default Login;


