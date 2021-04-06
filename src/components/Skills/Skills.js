import React from 'react'

const Skills = () => {
    return (
        <div class='skills container-fluid d-flex align-items-center justify-content-center'>
            <div class='boxRow row'>
                <span class='skillsHeading col'><b>Skills</b></span>
                <div class="w-100"></div>
                <div id='box1' class="skillCon col"><b>Programmiersprachen:</b></div>
                <div id='box2' class="skillCon col"><b>Libraries & Frameworks:</b></div>
                <div class="w-100"></div>
                <div id='box3' class="skillCon col"><b>Software:</b></div>
                <div id='box4' class="skillCon col"><b>Bleh:</b></div>
            </div>
        </div>
    )
}

export default Skills
