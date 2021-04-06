// LIBRARIES + FRAMEWORKS
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

// COMPONENTS
import Intro from './components/Intro/Intro.js';
import Navbar from './components/Navbar/Navbar';
import Me from './components/Me/Me';
import Skills from './components/Skills/Skills';

// CSS
import './App.css';


const App = () => {
    return (
        <div>
            <Intro />
            <Me />
            <Skills />
            {/* <Whyme /> */}
            {/* <Footer /> */}
        </div>
    )
}

export default App
