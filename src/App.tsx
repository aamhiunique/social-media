import './App.css';
import About from './components/about/About';
import Home from './components/home/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Marketplace from './components/marketplace/Marketplace';
import Blogs from './components/blogs/Blogs';
import Notfound from './components/notfound/Notfound';
import Nav from './components/nav/Nav';
import Footer from './components/footer/Footer';
import Contact from './components/contact/Contact';

function App() {
  return (
    <>
      <Router>
      <Nav/>
        <Routes>
          <Route path="/social-media/" element={<Home />} />
          <Route path="/social-media/about" element={<About />} />
          <Route path="/social-media/market-place" element={<Marketplace />} />
          <Route path="/social-media/blogs" element={<Blogs />} />
          <Route path="/social-media/contact" element={<Contact />} />
          <Route path="*" element={<Notfound />}></Route>
        </Routes>
        <Footer/>
      </Router>
    </>
    
  );
}

export default App;
