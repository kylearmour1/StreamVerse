import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
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
                variables: { ...formData }, 
            });

            Auth.login(data.signUp.token);
        } catch (e) {
            console.log(e);
        }
    };

    return (
        <div className='card'>
            <div className='card-body'>
                {/* {loading ? (
                    <div>Loading</div>
                ) : ( */}
        <div className='signUp-container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input 
                    className='firstName-input'
                    type="text"
                    value={formData.firstName}
                    onChange={handleChange}>
                    </input>
                </label>
                <label>
                    Last Name:
                    <input 
                    className='lasttName-input'
                    type="text"
                    value={formData.lastName}
                    onChange={handleChange}>
                    </input>
                </label>
                <label>
                    Username:
                    <input 
                    className='username-input'
                    type="text"
                    value={formData.username}
                    onChange={handleChange}>
                    </input>
                </label>
                <label>
                    Password:
                    <input 
                    className='password-input'
                    type="text"
                    value={formData.password}
                    onChange={handleChange}>
                    </input>
                </label>
                <label>
                    Email:
                    <input 
                    className='email-input'
                    type="text"
                    value={formData.email}
                    onChange={handleChange}>
                    </input>
                </label>
                <button className='submit' type="submit">Submit</button>
            </form>
        </div>
        
        </div>
        {error && <div>Something went wrong..</div>}
        </div>
    );
};

export default SignUp;