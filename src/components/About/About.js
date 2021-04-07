import React from 'react'

const About = () => {
    return (
        <div class='about d-flex flex-column justify-content-center'>
            <div class='aboutHeading'>
                <h3><b>Was mich ausmacht</b></h3>
                <span>_________________________</span>
            </div>
            <div class=' container'>
                <div class='btnCon container d-flex p-0 align-items-center'>
                    <div class="btn-group-vertical col-2 p-0">
                        <button class='btn'>Leidenschaft</button>
                        <button class='btn'>Teamwork</button>
                        <button class='btn'>Neugier</button>
                        <button class='btn'>Spaß</button>
                    </div>
                    <div class='aboutText col-10'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Odit accusantium temporibus beatae nisi? Qui ullam quibusdam
                        ut expedita consequatur saepe aliquam, officia iste possimus
                        aut officiis sequi, est, nisi earum? Lorem ipsum dolor sit,
                        amet consectetur adipisicing elit. Aperiam magnam beatae aliquam
                        amet similique eum exercitationem aut culpa quas, optio illo.
                        Eaque quasi laboriosam deleniti non. Aspernatur ut perspiciatis
                        iste.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About
