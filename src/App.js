// portfolio\src\App.js

import React, { useRef, useEffect } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './App.css';
import starsImage from './media/stars.png';
import moonImage from './media/moon.png';
import mnBehind from './media/mountains_behind.png';
import mnFront from './media/mountains_front.png';
import { experiences, projects } from './constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '@fortawesome/fontawesome-svg-core/styles.css'
import ProjectWidget from './components/ProjectWidget';
// import Contact from './components/contact';



function App() {

  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  const scrollToRef = (ref) => {
    window.scrollTo({ top: ref.current.offsetTop, behavior: 'smooth' });
  }

  useEffect(() => {
    const stars = document.getElementById('stars');
    const moon = document.getElementById('moon');
    const mountains_behind = document.getElementById('mountains_behind');
    const mountains_front = document.getElementById('mountains_front');
    const text = document.getElementById('text');
    const btn = document.getElementById('btn');
    const header = document.querySelector('header');

    const handleScroll = () => {
      const value = window.scrollY;
      stars.style.left = value * 0.25 + 'px';
      moon.style.top = value * 1.05 + 'px';
      mountains_behind.style.top = value * 0.5 + 'px';
      mountains_front.style.top = value * 0 + 'px';
      text.style.marginRight = value * 4 + 'px';
      text.style.marginTop = value * 1.5 + 'px';
      btn.style.marginTop = value * 1.5 + 'px';
      header.style.top = value * 0.5 + 'px';
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header>
        <p class="logo">Manish Salavkar</p>
        <ul>
          <li><button onClick={() => scrollToRef(homeRef)}>Home</button></li>
          <li><button onClick={() => scrollToRef(aboutRef)}>About</button></li>
          <li><button onClick={() => scrollToRef(projectsRef)}>Projects</button></li>
          <li><button onClick={() => scrollToRef(contactRef)}>Contact</button></li>
        </ul>
      </header>

      <section ref={homeRef}>
        <img src={starsImage} id="stars" alt="stars"></img>
        <img src={moonImage} id="moon" alt="moon"></img>
        <img src={mnBehind} id="mountains_behind" alt="mn_behind"></img>
        <h2 id="text">Hello there!</h2>
        <a href="#sec" id="btn">Explore</a>
        <img src={mnFront} id="mountains_front" alt="mn_front"></img>
      </section>

      <div class="sec" id="sec" ref={aboutRef}>
        <h2>About Me.</h2>
        <p>Hello there! I am a motivated software developer specializing in web development with a focus on backend technologies. I recently graduated with a Bachelor's degree in Automobile Engineering and have since dedicated my time to honing my programming skills.</p><br></br>
        <p>My journey into the world of software development began with a keen interest in Django, a powerful Python framework. Through self-study and hands-on projects, I have become proficient in building robust web applications using Django, Flask, and associated technologies.</p><br></br>
        <p>One of my notable projects involved creating a web scraping tool using Scrapy to extract job listings from Indeed. I implemented a data pipeline that stored the scraped data in a PostgreSQL database, integrated this pipeline with Django, and developed RESTful APIs using Django Rest Framework (DRF).</p><br></br>
        <p>Furthermore, I have expanded my expertise to include frontend development using React, enhancing my ability to create dynamic and interactive user interfaces. I am currently advancing my skills in React through ongoing learning and practice.</p><br></br>
        <p>In addition to web development, I am also exploring the realm of data analytics. I possess knowledge of various databases such as MySQL, SQLite3, and PostgreSQL, along with proficiency in data manipulation libraries like NumPy and Pandas. I am also familiar with statistical analysis using R.</p><br></br>
        <p>My approach to software development revolves around collaboration, continuous learning, and a passion for solving real-world problems. I am excited about the opportunity to contribute my skills and grow professionally in a dynamic team environment.</p>
      </div>

      <div id="timeline" ref={projectsRef}>
      <VerticalTimeline>
        {experiences.map((experience, index) => (
          <VerticalTimelineElement
            key={`experience-${index}`}
            contentStyle={{
              background: "#1d1836",
              color: "#fff",
            }}
            contentArrowStyle={{ borderRight: "7px solid  #232631" }}
            date={experience.date}
            iconStyle={{ background: experience.iconBg }}
            icon={
              <div className='flex justify-center items-center w-full h-full icon-container custom-icon'>
                <a key={`experience-${index}`} href={experience.url}>
                <FontAwesomeIcon
                    icon={experience.icon}
                    beat
                    style={{"--fa-animation-duration": "2.5s"}}
                    size="2xl" 
                    alt={experience.company_name}
                    className='w-[60%] h-[60%] object-contain'
                  />
                  </a>
              </div>
            }
          >
            <div>
              <h3 className='text-white text-[24px] font-bold'>{experience.title}</h3>
              <p
                className='text-secondary text-[16px] font-semibold'
                style={{ margin: 0 }}
              >
                {experience.company_name}
              </p>
            </div>

            <ul className='mt-5 list-disc ml-5 space-y-2'>
              {experience.points.map((point, index) => (
                <li
                  key={`experience-point-${index}`}
                  className='text-white-100 text-[14px] pl-1 tracking-wider'
                >
                  {point}
                </li>
              ))}
            </ul>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
      </div>

      <div className='projects'>
        <h1>My Projects</h1>
        <div className="project-widgets">
          {projects.map((project, index) => (
            <ProjectWidget key={index} project={project} />
          ))}
        </div>
      </div>

      <div className='contact' ref={contactRef}>
          {/* <Contact/> */}
      </div>

    </div>
  );
}

export default App;
