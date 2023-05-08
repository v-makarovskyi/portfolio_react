import { useState, useEffect } from 'react';
import { 
  BrowserRouter as Router, 
  Routes, 
  Route,
  Navigate
} from 'react-router-dom';
import './style.css'
import './App.css';
import NavBar from './components/Navbar';
import Footer from './components/Footer';
import Home from './components/Home/Home';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <div className="App">
      <NavBar />
      <Home />
      <Footer />
    </div>
    </Router>
    
  );
}

export default App;
