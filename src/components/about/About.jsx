import React from "react";
import "./about.css";
import Me from "../../assets/images/bath-edit.png";
import { TbHealthRecognition } from "react-icons/tb";

import {AiOutlineCustomerService } from 'react-icons/ai';
import {GiBlackBook} from 'react-icons/gi';
import {MdOutlineMovie} from 'react-icons/md';


const About = () => {
  return (
    <section id="about">
      <h5>More About Me</h5>
      <h2>About Me</h2>

      <div className="container about-container">
        <div className="about-me">
          <div className="about-me-image">
            <img src={Me} alt="about me" />
          </div>
        </div>
        <div className="about-content">
          <div className="about-cards"></div>
          <article className="about-card">
            <TbHealthRecognition className="about-icon" />
            <h5>Experience</h5>
            <p>Sport Rehabilitation 2yrs </p>
          </article>
          <article className="about-card">
            <AiOutlineCustomerService  className="about-icon" />
            <h5>Hobbies</h5>
            <p>Sport Rehabilitation 2yrs </p>
          </article>
          <article className="about-card">
            <GiBlackBook className="about-icon" />
            <h5>Favourite Books</h5>
            <p>Sport Rehabilitation 2yrs </p>
          </article>
          <article className="about-card">
            <MdOutlineMovie className="about-icon" />
            <h5>Favourite Movies</h5>
            <p>Sport Rehabilitation 2yrs </p>
          </article>
          <a href="#contact" className="btn btn-primary">Contact Me</a>
        </div>
      </div>
    </section>
  );
};

export default About;
