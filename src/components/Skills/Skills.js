import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faBook, faCogs, faTools } from '@fortawesome/free-solid-svg-icons'

const language = <FontAwesomeIcon icon={faLanguage} />
const book = <FontAwesomeIcon icon={faBook} />
const cogs = <FontAwesomeIcon icon={faCogs} />
const tools = <FontAwesomeIcon icon={faTools} />

const Skills = () => {
    return (
        <div id='skills' className='skills container-fluid d-flex align-items-center justify-content-center'>
            <div className='boxRow row'>
                <h3 className='col'><b>Skills</b></h3>
                <div className="w-100"></div>
                <span className='divider'>______</span>
                <div className="w-100"></div>

                <div id='box1' className="skillsCon col-md">
                    <h4><span>{language}</span> Programmiersprachen</h4>
                    <ul>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Java</li>
                    </ul>
                </div>

                <div id='box2' className="skillsCon col-md">
                    <h4><span>{book}</span> Frameworks & Libraries</h4>
                    <ul>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>Axios</li>
                        <li>Express</li>
                    </ul>
                </div>

                <div className="w-100"></div>

                <div id='box3' className="skillsCon col-md">
                    <h4><span>{tools}</span> Tools & Software</h4>
                    <ul>
                        <li>NodeJS</li>
                        <li>VSCODE</li>
                        <li>GitHub</li>
                        <li>GitBash</li>
                    </ul>
                </div>

                <div id='box4' className="skillsCon col-md">
                    <h4><span>{cogs}</span> Frameworks</h4>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Java</li>
                    </ul>
                </div>

                
            </div>
        </div>
    )
}

export default Skills
