import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

// COMPONENTS
import Intro from './components/Intro/Intro.js';
import Navbar from './components/Navbar/Navbar';
import Me from './components/Me/Me';
import Skills from './components/Skills/Skills'





const App = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            <Me />
            <Skills />
            {/* <Footer /> */}
        </div>
    )
}

export default App
