import React from "react";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'


import "./trainingCertification.css";
import {TbCertificate} from "react-icons/tb";
import IMGRevature from "../../../assets/IMGRevature.jpg";
import pythonBasics from "../../../assets/pythonBasics.jpg";
import Grammar from "../../../assets/Grammar.jpg";
import gettingPyt from "../../../assets/gettingPyt.jpg";
import pyFunction from "../../../assets/pyFunction.jpg";
import Aws from "../../../assets/Aws.jpg";
import HTML from "../../../assets/HTML.jpg";
import generation from "../../../assets/generation.jpg";
import W3school from "../../../assets/W3school.jpg";



const trainingCertification = [
    {
        id: 1,
        title: "JAVA TRAINING",
        company: "Revature. 2022",
        role: `Spend about 400 - 500 hours learning the core fundamentals of Java proramming language
                and developed a project which divide tasks equally among a group of family members 
                and it was accepted by recruters at Revature.`,
        Image: IMGRevature
    }, 
    {
        id: 2,
        title: "PYTHOM BASICS",
        company: "University of Michigan. 2020",
        role: ``,
        Image: pythonBasics
    },
    {
        id: 3,
        title: "GETTING STARTED WITH PYTHON",
        company: "University of Michigan. 2020",
        role: ``,
        Image: gettingPyt
    },
    {
        id: 4,
        title: "INTRODUCTION TO HTML",
        company: "Cousera Project Network. 2020",
        role: ``,
        Image: HTML
    },
    {
        id: 5,
        title: "PYTHON FUNCTIONS & DICTIONARIES",
        company: "UNIVERSITY OF MICHIGAN. 2020",
        role: ``,
        Image: pyFunction
    },
    {
        id: 6,
        title: "AMAZON WEB SERVICES",
        company: "AWS Platform 2020",
        role: ``,
        Image: Aws
    },
    {
        id: 7,
        title: "Grammar & Punctuation",
        company: "Division of Continuing Education. 2020",
        role: ``,
        Image: Grammar
    },
    {
        id: 8,
        title: "Certified JavaScript Developer",
        company: "W3school Training. 2022",
        role: ``,
        Image: W3school
    },
    {
        id: 9,
        title: "JUNIOR WEB DEVELOPER",
        company: "South Seattle College. 2022",
        role: ``,
        Image: generation
    },

];

const TrainingCertification = () => {

    return (
        <div className="trainingCerti">
            <h3>{<TbCertificate/>} TRAINING & CERTIFICATION</h3>
            <div className="training">
                <Slide>
                    {
                        trainingCertification.map((task) => (
                            <div key={task.id} className="items">
                                <h4>{task.title}</h4>
                                <p>{task.company}</p>
                                <p>{task.role}</p>
                                <img alt="revature" src={task.Image}/>
                            </div>
                        ))
                    }
                </Slide>
            </div>
        </div>
    )
};

export default TrainingCertification;