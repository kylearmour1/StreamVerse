import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { Link } from 'react-router-dom';
import { NEW_USER_MUTATION } from '../graphql/mutations';
import './Signup.css';
import Auth from '../../utils/auth';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: '',
    });
    
    const [signUp, { error, data}] = useMutation(NEW_USER_MUTATION);

       const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
       };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const { data } = await signUp({
                variables: { ...formData } 
            });

            Auth.login(data.token);
            console.log(data.token);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className='card'>
            <div className='card-body'>
            {data ? (
              <p>
                Success! You may now head{' '}
                <Link to="/">back to the homepage.</Link>
              </p>
            ) : (
        <div className='signUp-container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input 
                    className='firstName-input'
                    name='firstName'
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}>
                    </input>
                </label>
                <label>
                    Last Name:
                    <input 
                    className='lasttName-input'
                    name='lastName'
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}>
                    </input>
                </label>
                <label>
                    Username:
                    <input 
                    className='username-input'
                    name='username'
                    type="text"
                    value={formData.username}
                    onChange={handleChange}>
                    </input>
                </label>
                <label>
                    Password:
                    <input 
                    className='password-input'
                    name='password'
                    type="password"
                    value={formData.password}
                    onChange={handleChange}>
                    </input>
                </label>
                <label>
                    Email:
                    <input 
                    className='email-input'
                    name='email'
                    type="text"
                    value={formData.email}
                    onChange={handleChange}>
                    </input>
                </label>
                <button className='submit' type="submit">Submit</button>
            </form>
        </div>
            )}
        </div>
            
        {error && <div>Something went wrong..</div>}
        </div>
    );
};

export default SignUp;