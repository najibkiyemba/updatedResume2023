import React from "react";
import "./projectsFreelanceWork.css";
import {GoProject} from "react-icons/go";
import validation from "../../../assets/validation.jpg";
import restaurnt from "../../../assets/restaurnt.jpg";
import portfolio from "../../../assets/portfolio.jpg";
import shopping from "../../../assets/shopping.jpg";
import generationUSA from "../../../assets/generationUSA.jpg";
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


const projects = [
    {
        projectName: "VALIDATION APP",
        description: "The main purpose of this application is to validate user data.",
        Image: validation,
        link: "https://najibkiyemba.github.io/validationFormApp/"
    },
    {
        projectName: "RESTAURANTS FINDER",
        description: "This application fetch data from adifferent website using api and it help users find near by restaurants.",
        Image: restaurnt,
        link: ""
    },
    {
        projectName: "PERSONAL BLOG",
        description: "I developed a personal blog using JavaScript and React. It explains more about me and my role in tech.",
        Image: portfolio,
        link: "https://najibkiyemba.github.io/myReactPortfolio/"
    },
    {
        projectName: "ONLINE SHOPPING APP",
        description: "Under development...",
        Image: shopping,
        link: ""
    },
    {
        projectName: "ONLINE SURVEY FORM",
        description: "This application help students to give feedback on there experience in learning how to code.",
        Image: generationUSA,
        link: "https://najibkiyemba.github.io/onlineSurveyForm/"
    }
];

const ProjectsFreelanceWork = () => {

    return (
        <div className="projectsFreelance">
            <h3>{<GoProject/>} PROJECTS & FREELANCE WORK</h3>
            <div className="projects">
                <Slide>
                {
                    projects.map((pro, id) => (
                        <div className="projectItems">
                            <h4>{pro.projectName}</h4>
                            <p>{pro.description}</p>
                            <img alt="image" src={pro.Image}/>
                            <h4>Click <a target="-blank" href={pro.link}>Here</a> to view project.</h4>
                        </div>
                    ))
                }
                </Slide>
            </div>
        </div>
    );
};


export default ProjectsFreelanceWork;
