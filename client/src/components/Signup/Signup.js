import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { addUser } from '../../../'
import './Signup.css';

const SignUp = () => {
    const [formState, setFormState] = useState({
        firstName: '',
        lastName: '',
        username: '',
        password: '',
        email: '',
        password: '',
    })


}