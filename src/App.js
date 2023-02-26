import './App.css';
import { BrowserRouter as Router, Routes, Route, 
} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Works from './pages/Works';
import Skills from './pages/Skills';
import Footer from './pages/Footer';

function App() {
  return (
  <Router>
  <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/works' element={<Works />} />
    </Routes>
  <Footer />
  </Router>


    
  )
}

export default App;
