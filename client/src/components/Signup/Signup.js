import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { NEW_USER_MUTATION } from '../graphql/mutations';
import { addUser } from '../../../'
import './Signup.css';

const SignUp = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: '',
    })
    

}