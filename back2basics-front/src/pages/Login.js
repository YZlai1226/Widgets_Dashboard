import React, { useState, useContext, useEffect } from 'react';
import axios from '../api/axios'
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";

const Login = () => {
    let navigate = useNavigate();
    const { setAuth } = useContext(AuthContext);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userId, setUserId] = useState('');

    let emailInput = React.createRef();
    let passwordInput = React.createRef();

    
    const onSubmit = (event) => {
        setEmail(emailInput.current.value);
        setPassword(passwordInput.current.value);
        if (email !== '') {
        event.preventDefault();
        axios.post('/api/auth/login',
        JSON.stringify({ email: email, password: password }),
        {
            headers: { 'Content-Type': 'application/json' },
        })
        .then(res => {
        if (res.status === 200) {
            localStorage.setItem("token", JSON.stringify(res?.data.token).slice(1, -1));
            localStorage.setItem("userId", JSON.stringify(res?.data.userId));
            setUserId(res?.data.userId)
            setAuth({ userId });
            setTimeout(() => {
                navigate("/dashboard");
              }, 1500);
        } else {
            const error = new Error(res.error);
            throw error;
        }
    })
    .catch(err => {
      console.error(err);
      alert('Error logging in please try again');
    });
}
  }

    return (
      <form onSubmit={onSubmit}>
        <h1>Login Below!</h1>
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
export default Login;