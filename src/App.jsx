import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

import About from './pages/About';
import Home from './pages/Home';

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to='/' className='site-logo'>
          #VanLife
        </Link>
        <nav>
          <Link to='/about'>About</Link>
        </nav>
      </header>

      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
