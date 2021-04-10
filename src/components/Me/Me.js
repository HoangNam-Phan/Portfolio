import React from 'react';
import picture from './images/me.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandPaper } from '@fortawesome/free-solid-svg-icons'
import FadeInSection from '../FadeEffect/FadeInSection'

const hand = <FontAwesomeIcon className='hand' icon={faHandPaper} />


const Me = () => {
    return (
        <div id='intro' className='me container-fluid d-flex row align-items-center m-0'>
            <FadeInSection>
                <div className="row align-items-center">
                    <div className='meText col-lg-7 pt-4 px-5'>
                        <h2 className='mb-0'><b>Moin! Ich bin Nam. {hand}</b></h2>
                        <span className='dividerTwo'>________________</span>
                        <p className='mb-0'>
                            <br />
                                Ich bin ein selbst erlernter Frontend Developer mit einer Leidenschaft für das Programmieren.
                                Ich bin ein offener, engagierter und zielstrebiger Typ und der Überzeugung, dass ich eine perfekte
                                Ergänzung für ihr Team wäre.
                            <br />
                            Vielen Dank für ihren Besuch!
                        </p>
                    </div>
                    <div className='profile col-lg-5 d-flex justify-content-center py-5'>
                        <img className='pPicture img-fluid rounded-circle' src={picture} alt="picture" />
                    </div>
                </div>
            </FadeInSection>
        </div>
    )
}

export default Me;