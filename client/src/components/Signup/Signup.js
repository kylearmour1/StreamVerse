import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { NEW_USER_MUTATION } from '../graphql/mutations';
import './Signup.css';

const SignUp = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: '',
    })
    
    const [signUp, { loading, error}] = useMutation(NEW_USER_MUTATION, {
        onCompleted({ signUp}) {
            if (signUp) {
                // login once signed up set user to login
            }
        },
    });

    const handleSubmit = (event) => {
        event.preventDefault();
        signUp({ variables: { firstName, lastName, username, password, email} });
    };

    return (
        <div className='card'>
            <div className='card-body'>
                {loading ? (
                    <div>Loading</div>
                ) : (
        <div className='signUp-container'>
            <h2>Sign Up</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input 
                    className='firstName-input'
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData.firstName(e.target.value)}>
                    </input>
                </label>
                <label>
                    Last Name:
                    <input 
                    className='lasttName-input'
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => setFormData.lastName(e.target.value)}>
                    </input>
                </label>
                <label>
                    Username:
                    <input 
                    className='username-input'
                    type="text"
                    value={formData.username}
                    onChange={(e) => setFormData.username(e.target.value)}>
                    </input>
                </label>
                <label>
                    Password:
                    <input 
                    className='password-input'
                    type="text"
                    value={formData.password}
                    onChange={(e) => setFormData.password(e.target.value)}>
                    </input>
                </label>
                <label>
                    Email:
                    <input 
                    className='email-input'
                    type="text"
                    value={formData.email}
                    onChange={(e) => setFormData.email(e.target.value)}>
                    </input>
                </label>
            </form>
        </div>
        )}
        </div>
        {error && <div>Something went wrong..</div>}
        </div>
    );
};

export default SignUp;