import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLanguage, faBook, faCogs, faTools } from '@fortawesome/free-solid-svg-icons'

const language = <FontAwesomeIcon icon={faLanguage} />
const book = <FontAwesomeIcon icon={faBook} />
const cogs = <FontAwesomeIcon icon={faCogs} />
const tools = <FontAwesomeIcon icon={faTools} />

const Skills = () => {
    return (
        <div class='skills container-fluid d-flex align-items-center justify-content-center'>
            <div class='boxRow row'>
                <h3 class='col'><b>Skills</b></h3>
                <div class="w-100"></div>
                <span class='divider'>______</span>
                <div class="w-100"></div>

                <div id='box1' class="skillsCon col-md">
                    <h4><span>{language}</span> Programmiersprachen</h4>
                </div>

                <div id='box2' class="skillsCon col-md">
                    <h4><span>{book}</span> Libraries</h4>
                </div>

                <div class="w-100"></div>

                <div id='box3' class="skillsCon col-md">
                    <h4><span>{cogs}</span> Frameworks</h4>
                </div>

                <div id='box4' class="skillsCon col-md">
                    <h4><span>{tools}</span> Tools & Software</h4>
                </div>
            </div>
        </div>
    )
}

export default Skills
