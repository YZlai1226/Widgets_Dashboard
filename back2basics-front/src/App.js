import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js'
import Dashboard from './pages/Dashboard.js'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import SearchBar from './components/stuctureComponents/SearchBar.js'
import './App.css';
import AuthContext from "./context/AuthProvider.js";
import jwt_decode from "jwt-decode";
import axios from './api/axios.js'


function App() {
  const [auth, setAuth] = useState(null)
  const [decoded, setDecoded] = useState([])
  const [widgetsList, setWidgetsList] = useState([]);
  
  
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem('token');
      const decoded = jwt_decode(token);
      setDecoded(decoded);
    }
    const token = localStorage.getItem('token');
    if (token) {
      setAuth({ decoded })
    }
  }, []);
  
  const savedUserId = localStorage.getItem('userId');
  const userId = JSON.parse(savedUserId);

  useEffect(() => {
    if (userId) {
      getUserWidgets();
    }
  }, []);

  const getUserWidgets = () => {
    axios.get(`/api/users/${userId}`)
    .then(res => {
      setWidgetsList(res.data.widgets)
    })
  }
  
  useEffect (() => {
  }, [widgetsList])

  const ChangeWidgetsList = () => {
    getUserWidgets();
    console.log('widgetslist is ', widgetsList)
    setDeleteButtons(false);

  }
  const [deleteButtons, setDeleteButtons] = useState(false);
  
  const showDeleteButton = () => {
    console.log('I am on showDeleteButtons function')
    setDeleteButtons(true);
  }

  return (
    <div>
      <AuthContext.Provider value={{ auth, setAuth }}>
        <Router>
          <SearchBar widgetsList={widgetsList} onChange={ChangeWidgetsList} userId={userId} showDeleteButton={showDeleteButton} />
          <Routes>
            <Route exact path="/" element={< Home />} />
            {widgetsList &&
            <Route exact path="/dashboard" element={< Dashboard widgetsList={widgetsList} deleteButtons={deleteButtons} userId={userId} onChange={ChangeWidgetsList}/>}  />
            }
            <Route exact path="/login" element={< Login />} />
            <Route exact path="/register" element={< Register />} />
          </Routes>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
