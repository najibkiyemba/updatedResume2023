import React from "react";
import "./contactInformation.css";
import {MdOutlineEmail } from 'react-icons/md';
import { SlSocialLinkedin } from "react-icons/sl";
import {GoDeviceDesktop} from "react-icons/go";
import {GoLocation} from "react-icons/go";
import {ImPhone} from "react-icons/im"

const ContactInformation = () => {

    return (
        <div className="contactInfo">
            <h1>NAJIB KIYEMBA</h1>
            <div className="resumeHeader">
                <div className="email">
                    <h5>{<MdOutlineEmail />} najibkiyemba.nk@gmail.com</h5>
                </div>
                <div className="phoneNumber">
                    <h5>{<ImPhone/>} +1(503) 683-2014</h5>
                </div>
                <div className="address">
                    <h5>{<GoLocation/>} Washington</h5>
                </div>
                <div className="linkedin">
                    <a ><h5>
                        {<SlSocialLinkedin/>} najibkiyemba
                    </h5></a>
                </div>
                <div className="jobTitle">
                    <h5>{<GoDeviceDesktop/>} Software Engineer</h5>
                </div>
            </div>
        </div>
    );
};

export default ContactInformation;