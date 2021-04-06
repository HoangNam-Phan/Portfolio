import React from 'react';
import Navbar from '../Navbar/Navbar'

const Intro = () => {
    return (
        <div class='introWrapper'>
            <Navbar />
        <div class='introWrapper2 d-flex justify-content-center align-items-center'>
            <div class='introText d-flex flex-column align-items-center'>
                <h1 class='heading align-self-center'>Nam Phan</h1>
                <span class='title'>Frontend Developer</span>
            </div>
        </div>
        </div>
    )
}

export default Intro
