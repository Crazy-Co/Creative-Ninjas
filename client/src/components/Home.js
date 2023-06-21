import React from 'react'
import { Link } from 'react-router-dom';
import hero from '../images/hero.png';
import video from '../video/Tunnel.mp4';
import SkillCard from './Skill-Card';
import ytdl_Img from '../images/ytdl.jpg';

const Home = () => {
  return (
    <div>
      <div className="home grid">
        <h2>Digital<br /> Magical</h2>
        <p>Hey there! <br />
          I am Khushdev Yogi<br />
          MERN Stack Developer | Web Designer | Programmer
        </p>
        <Link to="/contact">
          <h3>Let's Talk <span className="material-symbols-outlined">arrow_forward</span></h3>
        </Link>
      </div>
      <div class="custom-shape-divider-top-1686907969 divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
        </svg>
      </div>
      {/* <div class="custom-shape-divider-top-1686907843">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" class="shape-fill"></path>
          <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" class="shape-fill"></path>
          <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" class="shape-fill"></path>
        </svg>
      </div> */}


      <div className="about grid">
        <div className="header-title grid">
          <div id='title'>
            <span id='purple'></span>
            <span id='red'></span>
            <span id='green'></span>
          </div>
          <h1>About
            <span class="material-symbols-outlined">
              sentiment_very_satisfied
            </span>
          </h1>
          <div className='hero-container'>
            <img src={hero} alt="hero-img" className='hero' />
          </div>
          <div id='content'>
            <video autoPlay muted loop><source src={video} type="video/mp4" /></video>
            <p>
              Hey! I am Khushdev. <br /> <br />
              Want to know about me? I'm... <br />
              A self-motivated Web Developer. <br />
              Exploring React Js and Express Js. <br />
              Currently doing B.Tech. in Civil Engineering department from IIT Madras. <br />

            </p>
          </div>
        </div>
      </div>
      <div class="custom-shape-divider-top-1686907969 divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
        </svg>
      </div>


      <div className="skills">
        <div className="header-title grid">
          <div id='title'>
            <span id='purple'></span>
            <span id='red'></span>
            <span id='green'></span>
          </div>
          <h1>Skills
            <span class="material-symbols-outlined">
              workspace_premium
            </span>
          </h1>
        </div>
        <div className="container">
          <SkillCard color={'#249aea'} skill='HTML' percent='90'/>
          <SkillCard color={'#02c70c'} skill='CSS' percent='92'/>
          <SkillCard color={'#d92104'} skill='Javascript' percent='77'/>
          <SkillCard color={'#d98e04'} skill='React.js' percent='82'/>
          <SkillCard color={'#02c4c7'} skill='Node.js' percent='70'/>
          <SkillCard color={'#8f02c7'} skill='Express.js' percent='75'/>
          <SkillCard color={'#f0fa2a'} skill='Mongo DB' percent='40'/>
          <SkillCard color={'#249aea'} skill='C / C++' percent='63'/>
          <SkillCard color={'#d92104'} skill='DSA' percent='45'/>
          {/* <SkillCard color={'#02c70c'} skill='Python' percent='30'/> */}
          <SkillCard color={'#fa2ae9'} skill='MS Office' percent='90'/>
          {/* <SkillCard color={'#1de099'} skill='Canva' percent='68'/> */}
        </div>
      </div>
      <div class="custom-shape-divider-top-1686907969 divider">
        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M649.97 0L550.03 0 599.91 54.12 649.97 0z" class="shape-fill"></path>
        </svg>
      </div>
      

      
      
      <div className="projects">
        <div className="header-title grid">
          <div id='title'>
            <span id='purple'></span>
            <span id='red'></span>
            <span id='green'></span>
          </div>
          <h1>Projects
            <span class="material-symbols-outlined">
              workspace_premium
            </span>
          </h1>
        </div>
        <div className="container">
          <div className="card">
            <div className="lines"></div>
            <div className="imgBox">
              {/* <img src={ytdl_Img} alt="img" /> */}
            </div>
            <div className="content"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home