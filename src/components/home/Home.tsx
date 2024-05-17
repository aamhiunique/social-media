import React from 'react'
import Nav from '../nav/Nav'
import About from '../about/About'
import Blogs from '../blogs/Blogs'
import Partners from '../partners/Partners'
import Counter from '../counter/Counter'
import Newsletter from '../newsletter/Newsletter'
import Footer from '../footer/Footer'
const Home = () => {
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
    )
}

export default Home