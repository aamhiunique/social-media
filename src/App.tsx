import './App.css';
import About from './components/about/About';

import Home from './components/home/Home';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Marketplace from './components/marketplace/Marketplace';

function App() {
  return (
    <>
        <BrowserRouter>
      <Routes>
        <Route path="/social-media/" element={<Home />} />
        <Route path="/social-media/about" element={<About />} />
        <Route path="/social-media/market-place" element={<Marketplace />} />

      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
