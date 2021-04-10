import React from 'react';
import picture from './images/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPaper } from '@fortawesome/free-solid-svg-icons'

const hand = <FontAwesomeIcon className='hand' icon={faHandPaper} />


const Me = () => {
    return (
        <div id='intro' className='me container-fluid d-flex row align-items-center m-0'>
            <div className="row align-items-center">
                <div className='meText col-lg-7 pt-4 px-5'>
                    <h2 className='mb-0'><b>Moin! Ich bin Nam. {hand}</b></h2>
                    <span className='dividerTwo'>________________</span>
                    <p className='mb-0'>
                        <br></br>
                        Ich bin ein selbst erlernter Frontend Developer mit einer Leidenschaft für das Programmieren. 
                        Blah blah
                        blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah
                        blahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblahblah.
                    </p>
                </div>
                <div className='profile col-lg-5 d-flex justify-content-center py-5'>
                    <img className='pPicture img-fluid rounded-circle' src={picture} alt="picture" />
                </div>
            </div>
        </div>
    )
}

export default Me;