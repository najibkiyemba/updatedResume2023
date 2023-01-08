import React from "react";
import "./professionalExperience.css";
import {FaHistory} from "react-icons/fa";

const ProfessionalExperience = () => {
    return (
        <div className="professionalExpe">
            <div className="history">
                <h3>{<FaHistory/>} WORK EXPERIENCE</h3>
                <div className="developer">
                    <h4>WEB DEVELOPER</h4>
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

                <div className="developer">
                    <h4>PHONE & COMPUTER TECHNICIAN</h4>
                    <p>Makulu Tech(MK). <span>Aug 2018</span></p>
                    <ul>
                        <li>Repair phones and computers with hardware and software damages. Such as charging faults and network locks.</li>
                        <li>Working as a team to diagonse damages, and repair phones and computers.</li>
                        <li>Increased production by using Google.com to learn how to repair certain damages in both hardware and software.</li>
                        <li>Developing customer satisfaction and trust through communication and less wait time.</li>
                        <li>Lead a group of about 5-10 technicians in the repairing process.</li>
                        <li>Developing popularity by working together as a team with one goal.</li>
                        <li>Increased sales by 20% through using advanced LCD Screen Separate Machines and recommendation to clients.</li>
                    </ul>
                </div>

                <div className="developer">
                    <h4>GENERAL CONTRACTOR</h4>
                    <p>Jomayi Property Consultant. <span>Jun 2016</span></p>
                    <ul>
                        <li>Working with a team of engineers to design and build long-lasting architectures.</li>
                        <li>Using starndard building materials and tools for building durable houses. </li>
                        <li>Mixing concrete and gravel by operating toro machinery mixer for faster development.</li>
                        <li>Using tap measure and other instruments for accurate messurements.</li>
                        <li>Attending 30min - 1hr morning meetings with a group of engineers to talk about planning for a day and divide work into individual tasks.</li>
                        <li>Recording and reporting all possible mistakes to engineers, that can cause future terrible damages to buildings.</li>
                        <li>Cleaning and dispossing away all hazard materials before leaving the working site.</li>
                    </ul>
                </div>

                <div className="developer">
                    <h4>BAKER</h4>
                    <p>Ever Brown Bakery. <span>Sep 2014 </span></p>
                    <ul>
                        <li>Dressing clean and appropriate before joining the baking department.</li>
                        <li>Making sure to use the right measurements when mixing ingredients for all products. Such as, cakes and breads.</li>
                        <li>Packing products in there right assigned containers after deep cleaning and drying them in hot water.</li>
                        <li>Setting oven alarms on when baking to prevent damaging products.</li>
                        <li>Using the right equipments when unpacking hot products from oven to avoid risks and serious damages.</li>
                        <li>Consistantly reminding other bakers to mantain the pressure of heat when ovens are operating. Not go beyond the maximum heat.</li>
                        <li>Washing and drying all used intruments before the shift ends.</li>
                    </ul>
                </div>

                <div className="developer">
                <h4>WAREHOUSE ASSOCIATE</h4>
                    <p>Amazon.com, Inc. <span>Oct  2020</span></p>
                    <ul>
                        <li>Joining 25min-40mins warm-up meetings for physical body streching, exercising, and get individual tasks from shift manager or assistant.</li>
                        <li>Sorting and packing packages in there assigned container bags using scanning devices, flashing lights, and alphabetical letters on bags.</li>
                        <li>Attending mandatory 15min - 30min break with my other co-workers per shift.</li>
                        <li>Usually at the end of the shift we looks for container bags, put them on carts, and stage them in there assigned location number.</li>
                        <li>Quickly report all damaged and linking packages to shift assistants or managers without touching them.</li>
                        <li>Unpacking carts from trucks and loading them on the conveyor belts with the help of a water spider(assigned task).</li>
                        <li>Clocking in and out before and after the shift starts and not later than 5 minutes.</li>
                    </ul>
                </div>

                <div className="developer">
                <h4>FARMING</h4>
                    <p>Family Business. <span>Feb 2022</span></p>
                    <ul>
                        <li>Growing plants and raising livestock on the farm.</li>
                        <li>Mulching the garden with dry grass to stop running water from unplanting under grown plants.</li>
                        <li>Educating other farmers on the village the advantages of planting more trees and the disadvantages of cutting downdown trees.</li>
                        <li>Using scarecrow techniques in gardens to scare and stop wild animals such as squirrels, monkeys, and ground hogs from eating and damaging farmer's crops.</li>
                        <li>Watering crops and adding farm yard manure in gardens to speed-up the growth of plants.</li>
                        <li>Harvesting and planting crops in the right season.</li>
                        <li>Transporting and advertising harvested crops to several markets on the village for sale.</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ProfessionalExperience;