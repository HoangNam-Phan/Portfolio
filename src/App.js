// LIBRARIES + FRAMEWORKS
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTS
import Intro from './components/Intro/Intro.js';
import Me from './components/Me/Me';
import Skills from './components/Skills/Skills';
import About from './components/About/About';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';


// CSS
import './App.css';


const App = () => {
    return (
        <div>
            <Intro />
            <Me />
            <Skills />
            <About />
            <Contact />
            <Footer />
        </div>
    )
}

export default App

