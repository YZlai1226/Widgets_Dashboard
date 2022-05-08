import React, { useState, useContext, useEffect } from 'react';
import axios from '../api/axios'
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";
import './Login.css'

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
      <div style={{ margin: "auto", marginTop: 185 }} class="signIn">
        <h1>Log In</h1>
        <div id="sign_in_form">
          <form onSubmit={onSubmit}>
            <div class="container">
              <div class='email_input'>
                <label class="login_label" htmlFor="email">Email:</label>
                <br />
                <input class ='login_input'
                  type="email"
                  name="email"
                  placeholder="Enter email..."
                  ref={emailInput}
                  required
                />
              </div>
              <div class='password_input'>
                <label class="login_label" htmlFor="password">Password:</label>
                <br />
                <input class ='login_input'
                  type="password"
                  name="password"
                  placeholder="Enter password..."
                  ref={passwordInput}
                  required
                />
              </div>
              <br />
              <button onClick={onSubmit} class='login_button'>Log in</button>
            </div>
          </form>
        </div>
        <p>
          Need an Account?<br />
          <span className="line">
            <a href="/register">Sing Up</a>
          </span>
        </p>
      </div>
    );
}
export default Login;