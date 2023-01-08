import React from "react";
import "./skills.css";
import {GiSkills} from "react-icons/gi";



const Skills = () => {

    return (
        <div className="skills">
            <h3>{<GiSkills/>} SKILLS</h3>
            <div className="skillsList">
                <ul>
                    <li>HTML/CSS</li>
                    <li>BootStrap</li>
                    <li>JavaScript(ES6)</li>
                    <li>Modern React</li>
                    <li>Redux</li>
                    <li>Responsive Design</li>
                    <li>Git/GitHub</li>
                    <li>Visual Studio Code/Command Line</li>
                    <li>Python</li>
                </ul>
            </div>
        </div>
    );
};

export default Skills;