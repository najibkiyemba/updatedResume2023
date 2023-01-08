import React from "react";
import "./education.css";
import {FaUserGraduate} from "react-icons/fa";



const Education = () => {


    return (
        <div className="education">
            <h3>{<FaUserGraduate/>} EDUCATION</h3>
            <div className="highSchool">
                <h4>High School Diploma</h4>
                <p>Excel Center South Bend, Idiana.</p>
                <p>Aug 2021</p>
                <div className="roles">
                    <ul>
                        <li>Archived Safety & Health Fundamentals Certificate Through OSHA Online Education Training.</li>
                        <li>Passed all science classes with A+.</li>
                        <li>Lead a team of about 7 - 10 colleagues to solve math(algebra) problems.</li>
                    </ul>
                </div>
            </div>

            <div className="highSchool">
                <h4>Associate of Applied Science Degree.</h4>
                <p>Ivy Tech Community College USA</p>
                <p>Expected 2024</p>
                <div className="roles">
                    <ul>
                        <li>Completed and passed web development classes using HTML and CSS.</li>
                        <li>Wrote about 3-5 eassays using more than 2000 words in each eassay.</li>
                        <li>Wrote a paper about Internet of Things(IOT)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Education;