import React from "react";
import "./resumeIntroduction.css";

const resumeData = {
    introduction: `Independent web developer with a strong experience working
     with computers, programs, coding, and deeply knowledgeable in a variety of 
     computer languages, including HTML5, CSS, BOOTSTRAP, JAVASCRIPT, and REACT. 
     Understand principles and techniques of intial website 
     consturction and ongoing maintenance using React/JS. Last 2 years working from
     home on different web-projects around the world and hosting them on GitHub.`
}

const ResumeIntroduction = () => {

    return (
        <div className="resumeIntro">
            <div className="introduction">
                <h3>SUMMARY</h3>
                <p id="summary">{resumeData.introduction}</p>
            </div>
        </div>
    );
};

export default ResumeIntroduction;