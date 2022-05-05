import React, { useState } from 'react';
import axios from '../api/axios'
import { useNavigate } from "react-router-dom";

const Register = () => {
    let navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    let nameInput = React.createRef();
    let emailInput = React.createRef();
    let passwordInput = React.createRef();

    
    const onSubmit = (event) => {
        setName(nameInput.current.value);
        setEmail(emailInput.current.value);
        setPassword(passwordInput.current.value);
        if (email !== '') {
        event.preventDefault();
        axios.post('/api/auth/signup',
        JSON.stringify({ name: name, email: email, password: password }),
        {
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => {
        console.log('========registerrrr===========', res) 
        if (res.status === 201) {
                navigate("/login");
        } else {
            const error = new Error(res.error);
            throw error;
        }
    })
}
  }

    return (
      <form onSubmit={onSubmit}>
        <h1>Register</h1>
        <input
          type="string"
          name="name"
          placeholder="Enter name"
          ref={nameInput}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Enter email"
          ref={emailInput}
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          ref={passwordInput}
          required
        />
        <button onClick={onSubmit}>Submit</button>
      </form>
    );
}
export default Register;