import React, {useEffect, useState} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js'
import Dashboard from './pages/Dashboard.js'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import SearchBar from './components/stuctureComponents/SearchBar.js'
import './App.css';
import AuthContext from "./context/AuthProvider.js";
import jwt_decode from "jwt-decode";
 



function App() {
  const [auth, setAuth] = useState(null)
  const [decoded, setDecoded] = useState([])
  
  
  useEffect(() => {
    if (localStorage.getItem("token") !== null) {
      const token = localStorage.getItem('token');
      const decoded = jwt_decode(token);
      setDecoded(decoded);
    }
    const token = localStorage.getItem('token');
    if (token) {
      setAuth({decoded})
    }
  }, []);


  return (
    <div>
      <AuthContext.Provider value={{ auth, setAuth }}>
      <Router>
      <SearchBar />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/dashboard" element={< Dashboard />} />
          <Route exact path="/login" element={< Login />} />
          <Route exact path="/register" element={< Register />} />
        </Routes>
      </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
