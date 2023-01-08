import React from "react";
import "./trainingCertification.css";
import {TbCertificate} from "react-icons/tb";
import IMGRevature from "../../../assets/IMGRevature.jpg";


const trainingCertification = [
    {
        id: 1,
        title: "JAVA TRAINING",
        company: "Revature",
        role: `Spend about 400 - 500 hours learning the core fundamentals of Java proramming language
                and developed a project which divide tasks equally among a group of family members 
                and it was accepted by recruters at Revature.`,
        Image: IMGRevature
    }
];

const TrainingCertification = () => {

    return (
        <div className="trainingCerti">
            <h3>{<TbCertificate/>} TRAINING & CERTIFICATION</h3>
            <div className="training">
                <h4></h4>
            </div>
        </div>
    )
};

export default TrainingCertification;