import React from 'react';
import Navbar from '../Navbar/Navbar';
import Video from './video/video.mp4';

const Intro = () => {
    return (
        <div className='introWrapper'>
            <div className='vidCon container-fluid px-0 d-flex'>
                <video className='bgVideo'
                    src={Video} autoPlay={true} muted={true} loop={true} />
            </div>
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
