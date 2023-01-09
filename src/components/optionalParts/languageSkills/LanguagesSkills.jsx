import React from "react";
import "./languagesSkills.css";
import {MdLanguage} from "react-icons/md"


const LanguagesSKills = () => {

    return (

        <div className="languages">
            <h3>{<MdLanguage/>} LANGUAGES & SKILLS</h3>
            <table>
                <thead>
                    <tr>
                        <th>LAGUAGES</th>
                        <th>SKILLS</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>English</td>
                        <td>Problem Solving</td>
                    </tr>
                    <tr>
                        <td>Spanish</td>
                        <td>Creativity</td>
                    </tr>
                    <tr>
                        <td>Luganda</td>
                        <td>Communication</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Learning & Improving</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Computer Literacy</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Attention to Details</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default LanguagesSKills;