import './App.css';
import { BrowserRouter as Router, Routes, Route, 
} from 'react-router-dom';
import Navbar from './Navbar';
import Home from './pages/Home';
import Works from './pages/Works';
import Skills from './pages/Skills';

function App() {
  return (
  <Router>
  <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/skills' element={<Skills />} />
      <Route path='/works' element={<Works />} />
    </Routes>
  </Router>


    
  )
}

export default App;
