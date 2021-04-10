import React, { useState } from 'react'
import FadeInSection from '../FadeEffect/FadeInSection';

const About = () => {

    const tabOneText = 'Ich bringe sehr viel Leidenschaft mit!';
    const tabTwoText = 'Ich arbeite sowohl alleine als auch im Team sehr gut!';
    const tabThreeText = 'Ich bin sehr neugierig über neue Technologien und möchte mich stets weiterentwickeln!';
    const tabFourText = 'Ich habe eine Menge Spaß am Programmieren, weshalb ich mit viel Engagement arbeite!';

    let [tab, setTab] = useState(() => tabOneText);

    const handleClick = (x) => {
        setTab(() => {
            tab = x;
            return tab;
        })
    }

    return (
        <div id='about' className='about d-flex flex-column justify-content-center'>
            <div className='aboutHeading'>
                <FadeInSection>
                    <h2><b>Was mich ausmacht</b></h2>
                    <span>_________________________</span>
                </FadeInSection>
            </div>
            <div className=' container'>
                <FadeInSection>
                    <div className='btnCon container d-flex p-0 align-items-center'>
                        <div className="btn-group-vertical col-2 p-0">
                            <button className={`button ${tab === tabOneText ? 'btnClicked' : ''}`}
                                onClick={() => handleClick(tabOneText)}>Leidenschaft</button>
                            <button className={`button ${tab === tabTwoText ? 'btnClicked' : ''}`}
                                onClick={() => handleClick(tabTwoText)}>Teamwork</button>
                            <button className={`button ${tab === tabThreeText ? 'btnClicked' : ''}`}
                                onClick={() => handleClick(tabThreeText)}>Neugier</button>
                            <button className={`button ${tab === tabFourText ? 'btnClicked' : ''}`}
                                onClick={() => handleClick(tabFourText)}>Spaß</button>
                        </div>
                        <div className='aboutText col-10'>
                            <p>
                                {tab}
                            </p>
                        </div>
                    </div>
                </FadeInSection>
            </div>
        </div>
    )
}

export default About
