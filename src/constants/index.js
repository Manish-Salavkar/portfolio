import { faGraduationCap, faGear, faLaptopCode, faTools } from '@fortawesome/free-solid-svg-icons';
import jobhubImage from '../assets/jobhub.jpeg';
import flaskImage from '../assets/flaskpro.jpeg';
import scrapyImage from '../assets/scrapy.jpg';

import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    threejs,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "React Native Developer",
      icon: mobile,
    },
    {
      title: "Backend Developer",
      icon: backend,
    },
    {
      title: "Content Creator",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "B.E | Automobile Engineering",
      url: "https://www.google.com/",
      company_name: "Mumbai University - Pillai HOC College of Engineering and Technology",
      icon: faGraduationCap,
      iconBg: "#E6DEDD",
      date: "May 2023",
      points: [
        'CGPA : 7.2',
      ],
    },
    {
      title: "Final Year Project Head - Smart Active Spoiler",
      url: "https://drive.google.com/drive/u/0/folders/1AfKn61sS5n1d1yxh48LJs0yhxC279LT7",
      company_name: "Design and Development of Active Spoiler",
      icon: faGear,
      iconBg: "#E6DEDD",
      date: "",
      points: [
        "A smart active spoiler prototype was developed, drawing inspiration from the Zenvo TSR-S, with a focus on integrating aerodynamics and modern technology.",
        "Utilizing SolidWorks for design and ANSYS simulations for optimization, the prototype was fabricated with a custom control module powered by Arduino. This system included precision linear servo actuators, an optical rotary encoder, and PCA9685 for responsive adjustments.",
        "The result is a functional smart active spoiler that demonstrates proficiency in engineering and design, enhancing aerodynamic performance while showcasing the integration of innovative technologies.",
      ],
    },
    {
      title: "Web Development Internship",
      url: "https://github.com/Manish-Salavkar/WeatherApp-Flask/tree/main/weatherapp",
      company_name: "Academor",
      icon: faLaptopCode,
      iconBg: "#E6DEDD",
      date: "Jan 2023",
      points: [
          "For minor project, developed a static webpage with HTML, CSS, Javascript",
          "For major project, developed a Weather Forecast site with Flask and OpenWeatherMap API",
          "Learned some important concepts in Web Development"
      ],
    },
    {
      title: "Full stack Developer",
      url: "https://github.com/Manish-Salavkar/Django-DRF-Scrapy",
      company_name: "JobHub",
      icon: faTools,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developed a Scrapy project to scrape job posting data and pipeline to save it in PostgresSQL",
        "Utilized ScraopeOps Proxy API to enhance concurrency and prevent IP detection during scraping",
        "Further developed a Full Stack Django Application to display job postings and create same using DRF and Fetch API",
        "Implemented Razorpay payment gateway to simulate payment processes for resume building services.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "JobHub",
      description:
        "A comprehensive Web Project involving Web Scraping, allowing users to scrape indeed job posting data via links or parameters as well as a Django based Webapp with features like bookmarking, resume builder, custom job postings, payment gateway and much more",
      tags: [
        {
          name: "Django",
          color: "blue-text-gradient",
        },
        {
          name: "Scrapy",
          color: "blue-text-gradient",
        },
        {
          name: "Fetch API",
          color: "green-text-gradient",
        },
        {
          name: "PostgreSQl",
          color: "green-text-gradient",
        },
        {
          name: "JavaScript",
          color: "green-text-gradient",
        },
        {
          name: "DRF",
          color: "pink-text-gradient",
        },
      ],
      image: jobhubImage,
      source_code_link: "https://github.com/Manish-Salavkar/Django-DRF-Scrapy",
    },
    {
      name: "Weather App",
      description:
        "Developed a weather application using Flask, integrating the OpenWeatherMap API via the Requests library. Utilized HTML for structure, CSS for styling, and JavaScript for interactive elements, providing users with real-time weather information in a user-friendly interface.",
      tags: [
        {
          name: "Flask",
          color: "blue-text-gradient",
        },
        {
          name: "HTML",
          color: "green-text-gradient",
        },
        {
          name: "CSS",
          color: "pink-text-gradient",
        },
        {
          name: "JS",
          color: "pink-text-gradient",
        },
      ],
      image: flaskImage,
      source_code_link: "https://manishs.pythonanywhere.com/",
    },
    {
      name: "Indeed Scraper",
      description:
        "A Web Scraper created with Scrapy framework for scraping Indeed job postings and pipeline with PostgreSQL",
      tags: [
        {
          name: "Scrapy",
          color: "blue-text-gradient",
        },
        {
          name: "PostgreSQL",
          color: "green-text-gradient",
        },
        {
          name: "Proxy API",
          color: "pink-text-gradient",
        },
      ],
      image: scrapyImage,
      source_code_link: "https://github.com/Manish-Salavkar/Scrapy-Indeed/tree/main/job",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };