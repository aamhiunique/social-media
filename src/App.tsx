import './App.css';
import About from './components/about/About';
import Blogs from './components/blogs/Blogs';
import Counter from './components/counter/Counter';
import Footer from './components/footer/Footer';
import Nav from './components/nav/Nav';
import Newsletter from './components/newsletter/Newsletter';
import Partners from './components/partners/Partners';

function App() {
  return (
    <>
      <Nav/>
      <About/>
      <Blogs/>
      <Partners/>
      <Counter/>
      <Newsletter/>
      <Footer/>

    </>
    
  );
}

export default App;
