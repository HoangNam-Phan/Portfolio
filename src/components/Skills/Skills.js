import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faBook, faCogs, faTools } from '@fortawesome/free-solid-svg-icons'
import FadeInSection from '../FadeEffect/FadeInSection';

const language = <FontAwesomeIcon className='books' icon={faLanguage} />
const book = <FontAwesomeIcon icon={faBook} />
const cogs = <FontAwesomeIcon icon={faCogs} />
const tools = <FontAwesomeIcon icon={faTools} />

const Skills = () => {
    return (
        <div id='skills' className='skills container-fluid d-flex align-items-center justify-content-center'>
            <FadeInSection>
                <div className='boxRow row'>
                    <h2 className='skillsHeading col'><b>Skills</b></h2>
                    <div className="w-100"></div>
                    <span className='divider'>______</span>
                    <div className="w-100"></div>
                    
                    <div id='box1' className="skillsCon col-md">
                        <h3><span>{language}</span> Programmiersprachen</h3>
                        <ul>
                            <li>JavaScript</li>
                            <li>HTML</li>
                            <li>CSS</li>
                            <li>Java</li>
                        </ul>
                    </div>
                    <div id='box2' className="skillsCon col-md">
                        <h3><span>{book}</span> Frameworks & Libraries</h3>
                        <ul>
                            <li>React</li>
                            <li>Bootstrap</li>
                            <li>Axios</li>
                            <li>Express</li>
                        </ul>
                    </div>
                    <div className="w-100"></div>
                    <div id='box3' className="skillsCon col-md">
                        <h3><span>{tools}</span> Tools & Software</h3>
                        <ul>
                            <li>NodeJS</li>
                            <li>VSCODE</li>
                            <li>GitHub</li>
                            <li>GitBash</li>
                            <li>Terminal</li>
                        </ul>
                    </div>
                    <div id='box4' className="skillsCon col-md">
                        <h3><span>{cogs}</span> Datenbanken</h3>
                        <ul>
                            <li>MongoDB</li>
                            <li>SQL</li>
                        </ul>
                    </div>

                </div>
            </FadeInSection>
        </div>
    )
}

export default Skills
