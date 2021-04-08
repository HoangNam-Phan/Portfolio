import React from 'react';
import Navbar from '../Navbar/Navbar'

const Intro = () => {
    return (
        <div className='introWrapper'>
            <Navbar />
        <div className='introWrapper2 d-flex justify-content-center align-items-center'>
            <div className='introText d-flex flex-column align-items-center'>
                <h1 className='heading align-self-center'>Nam Phan</h1>
                <span className='title'>Frontend Developer</span>
            </div>
        </div>
        </div>
    )
}

export default Intro
