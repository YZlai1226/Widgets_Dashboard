import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home.js'
import Dashboard from './pages/Dashboard.js'
import Login from './pages/Login.js'
import Register from './pages/Register.js'
import SearchBar from './components/stuctureComponents/SearchBar.js'
import './App.css';

function App() {
  return (
    <div>
      <Router>
      <SearchBar />
        <Routes>
          <Route exact path="/" element={< Home />} />
          <Route exact path="/dashboard" element={< Dashboard />} />
          <Route exact path="/login" element={< Login />} />
          <Route exact path="/register" element={< Register />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
