import React from 'react'
import './projects.css'
import SalaryApp from '../../assets/images/salary-analysis.jpg';
import ProjectOne from '../../assets/images/project-1.jpg';
import Planner from '../../assets/images/planner-app.jpg';
import ReadMe from '../../assets/images/readme-gen.jpg';
import PasswordGen from '../../assets/images/password-gen.jpg';
import PortOne from '../../assets/images/portfolio-1.jpg';


const Projects = () => {
  return (
    <section id='project'>
      <h5>My Projects</h5>
      <h2>Portfolio</h2>
      <div className='container project-container'>
{/* FIRST IMG AND LINK */}
        <article className='project-item'>
          <div className='project-image'>
            <img src={SalaryApp} alt="" />
          </div>
<div className='project-cta'>
          <a href="https://github.com/ChloeHill3/Salary-Analysis" className='btn' target='_blank'>Salary Analysis App</a>
          <a href="https://github.com/ChloeHill3/Salary-Analysis" className='btn btn-primary' target='_blank'>Click Here to see GitHub Page</a></div>
        </article>
{/* SECOND IMG AND LINK */}

        <article className='project-item'>
          <div className='project-image'>
            <img src={ProjectOne} alt="" />
          </div>
            <div className='project-cta'>
            <a href="https://github.com/ChloeHill3/Planner-app" className='btn' target='_blank'>Planner App</a>
          <a href="https://github.com/ChloeHill3/Planner-app" className='btn btn-primary' target='_blank'>Click Here to see GitHub Page</a></div>
        </article>
{/* THIRD IMG AND LINK */}

        <article className='project-item'>
          <div className='project-image'>
            <img src={PasswordGen} alt="" />
          </div>
            <div className='project-cta'>
            <a href="https://github.com/ChloeHill3/Random_Password_Generator" className='btn' target='_blank'>Random Password Generator</a>
          <a href="https://github.com/ChloeHill3/Random_Password_Generator" className='btn btn-primary' target='_blank'>Click Here to see GitHub Page</a></div>
        </article>
{/* FOURTH IMG AND LINK */}

        <article className='project-item'>
          <div className='project-image'>
            <img src={ProjectOne} alt="" />
          </div>
            <div className='project-cta'>
            <a href="https://github.com/ChloeHill3/TravelXperience" className='btn' target='_blank'>First Group Project</a>
          <a href="https://github.com/ChloeHill3/TravelXperience" className='btn btn-primary' target='_blank'>Click Here to see GitHub Page</a></div>
        </article>
{/* FIFTH IMG AND LINK */}

        <article className='project-item'>
          <div className='project-image'>
            <img src={ReadMe} alt="" />
          </div>
            <div className='project-cta'>
            <a href="https://github.com/ChloeHill3/READMEGen" className='btn' target='_blank'>ReadMe Generator</a>
          <a href="https://github.com/ChloeHill3/READMEGen" className='btn btn-primary' target='_blank'>Click Here to see GitHub Page</a></div>
        </article>
{/* SIXTH IMG AND LINK */}
        
        <article className='project-item'>
          <div className='project-image'>
            <img src={PortOne} alt="" />
          </div>
            <div className='project-cta'>
            <a href="https://github.com/ChloeHill3/Portfolio" className='btn' target='_blank'>First Code Portfolio</a>
          <a href="https://github.com/ChloeHill3/Portfolio" className='btn btn-primary' target='_blank'>Click Here to see GitHub Page</a></div>
        </article>

      </div>
    </section>
  )
}

export default Projects