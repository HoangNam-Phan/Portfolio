import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar/Navbar.js';
import Intro from './components/Intro/Intro.js';
import './App.css';


const App = () => {
    return (
        <div>
            <Navbar />
            <Intro />
            {/* <Me />
            <Skills />
            <Footer /> */}
        </div>
    )
}

export default App
