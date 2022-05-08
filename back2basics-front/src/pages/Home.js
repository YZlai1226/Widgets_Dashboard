import React, { useContext } from 'react';
import dashboard from './../images/dashboard.jpg';
import './Home.css'
import { useNavigate } from "react-router-dom";
import AuthContext from "../context/AuthProvider";


const Home = () => {
    let navigate = useNavigate();
    const { auth, setAuth } = useContext(AuthContext);

    if (auth) {
        navigate("/dashboard")
    }

    return (
        <div class='homeContainer'>
            <h1>Welcome to Back2Basics !</h1>
            <h2>See what's happening</h2>
            <img class='homeImage' src={dashboard} alt="See what's happening"></img>
            <h3>Customize your dashboard to track everything that interests you online.</h3>
            <p>Bring together all your favorite web content.
Follow websites and RSS feeds.</p>
        </div>
    )
};

export default Home;