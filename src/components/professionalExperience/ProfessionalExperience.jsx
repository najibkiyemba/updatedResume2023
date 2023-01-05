import React from "react";
import "./professionalExperience.css";

const ProfessionalExperience = () => {
    return (
        <div className="professionalExpe">
            <div className="history">
                <h3>WORK EXPERIENCE</h3>
                <div className="projects">
                    <h4>Web-developer</h4>
                    <p>Personal Projects. <span>Feb 2022 - Present</span></p>
                    <ul>
                        <li>Full time frontend developer using React</li>
                        <li>Working with internal and external API to fetch data.</li>
                        <li>Improved UI through testing and debugging before deployment.</li>
                        <li>Working with forms to control user inputs through form validation</li>
                        <li>Developing and maintaining front and backend of React Apps.</li>
                        <li>Contributing to web applications through Git.</li>
                        <li>Deploying completed projects on GitHub.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalExperience;