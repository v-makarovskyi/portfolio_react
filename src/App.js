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
import About from './components/About/About';
import Projects from './components/Projects/Projects';
import Resume from './components/Resume/Resume';
import Preloader from './components/Preloader';
import ScrollToTop from './components/ScrollToTop';
import "bootstrap/dist/css/bootstrap.min.css"

function App() {

  const [load, setLoad] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoad(false)
    }, 1200)
    return () => clearInterval(timer)
  }, [])

  return (
    <Router>
      <Preloader load={load} />
      <div className="App">
      <NavBar />
      <ScrollToTop />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/project' element={<Projects />} />
        <Route path='/resume' element={<Resume />} />
      </Routes>
      <Footer />
    </div>
    </Router>
    
  );
}

export default App;
