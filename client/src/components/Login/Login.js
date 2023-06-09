import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { LOGIN_MUTATION } from '../graphql/mutations';
import { useHistory } from 'react-router-dom';
import './Login.css';


const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();
  
  const [login, { loading, error }] = useMutation(LOGIN_MUTATION, {
    onCompleted: ({ login }) => {
      console.log('Completed!, ', login);
      history.push('/home');
      // store the use id or token for later jwt use
      // redirect to home page
      // maybe setState of signedIn = true?
    }
  });
    
    

 

  const handleSubmit = (event) => {
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
      {loading && <p>Loading...</p>}
      {error && <p>Error :( Please try again</p>}
    </div>
  );
  
};

export default Login;




// import React, { useState } from 'react';
// import { useMutation } from '@apollo/client';
// import { Link } from 'react-router-dom';
// import { LOGIN_MUTATION } from '../graphql/mutations';
// import Auth from '../../Auth/auth';
// import './Login.css';

// const Login = () => {
//   const [formState, setFormState] = useState({ username: '', password: '' });
//   const [login, { error, data }] = useMutation(LOGIN_MUTATION);

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormState({
//       ...formState,
//       [name]: value,
//     });
//   };

//   const handleFormSubmit = async (event) => {
//     event.preventDefault();
//     try {
//       const mutationResponse = await login({ variables: { ...formState } });
//       Auth.login(mutationResponse.data.login.token);
//     } catch (e) {
//       console.error(e);
//     }

//     setFormState({
//       username: '',
//       password: '',
//     });
//   };

//   return (
//     <main className="flex-row justify-center mb-4">
//       <div className="col-12 col-lg-10">
//         <div className="card">
//           <h4 className="card-header bg-dark text-light p-2">Login</h4>
//           <div className="card-body">
//             {data ? (
//               <p>
//                 Success! You may now head{' '}
//                 <Link to="/">back to the homepage.</Link>
//               </p>
//             ) : (
//               <form onSubmit={handleFormSubmit}>
//                 <input
//                   className="form-input"
//                   placeholder="Your username"
//                   name="username"
//                   type="text"
//                   value={formState.username}
//                   onChange={handleChange}
//                 />
//                 <input
//                   className="form-input"
//                   placeholder="******"
//                   name="password"
//                   type="password"
//                   value={formState.password}
//                   onChange={handleChange}
//                 />
//                 <button
//                   className="btn btn-block btn-primary"
//                   style={{ cursor: 'pointer' }}
//                   type="submit"
//                 >
//                   Submit
//                 </button>
//               </form>
//             )}

//             {error && (
//               <div className="my-3 p-3 bg-danger text-white">
//                 {error.message}
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// };

// export default Login;