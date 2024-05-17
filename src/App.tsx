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
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/market-place" element={<Marketplace />} />

      </Routes>
    </BrowserRouter>
    </>
    
  );
}

export default App;
