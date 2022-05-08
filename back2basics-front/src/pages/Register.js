import React, { useState } from 'react';
import axios from '../api/axios'
import { useNavigate } from "react-router-dom";
import './Register.css'

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
      <div style={{ margin: "auto", marginTop: 185 }} class="signUp">
        <h1>Register</h1>
        <div id="sign_up_form">
          <form onSubmit={onSubmit}>
            <div class="container">
              <div class='name_input'>
                <label class="signup_label" htmlFor="name">Name:</label>
                <br />
                <input class='signup_input'
                  type="string"
                  name="name"
                  placeholder="Enter name..."
                  ref={nameInput}
                  required
                />
              </div>
              <div class='email_input'>
                <label class="signup_label" htmlFor="email">Email:</label>
                <br />
                <input class='signup_input'
                  type="email"
                  name="email"
                  placeholder="Enter email..."
                  ref={emailInput}
                  required
                />
              </div>
              <div class='password_input'>
                <label class="signup_label" htmlFor="password">Password:</label>
                <br />
                <input class='signup_input'
                  type="password"
                  name="password"
                  placeholder="Enter password..."
                  ref={passwordInput}
                  required
                />
              </div>
              <button onClick={onSubmit} class='signup_button'>Register</button>
            </div>
          </form>
        </div>
      </div>
    );
}
export default Register;