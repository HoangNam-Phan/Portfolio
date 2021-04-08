import React, { useState } from 'react'

const About = () => {

    const tabOneText = 'Ich bringe sehr viel Leidenschaft mit!';
    const tabTwoText = 'Ich liebe es zusammen zu arbeiten!';
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
                <h3><b>Was mich ausmacht</b></h3>
                <span>_________________________</span>
            </div>
            <div className=' container'>
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
            </div>
        </div>
    )
}

export default About
