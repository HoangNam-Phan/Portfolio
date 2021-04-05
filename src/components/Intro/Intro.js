import React from 'react';
import Navbar from '../Navbar/Navbar'

const Intro = () => {
    return (
        <div class='introWrapper d-flex'>
            <Navbar />
            <div class='introText d-flex align-items-center'>
                <div class='d-flex flex-column align-items-center'>
                <h1 class='heading'>Nam Phan</h1>
                <span>Frontend Developer</span>
                </div>
            </div>
        </div>
    )
}

export default Intro
