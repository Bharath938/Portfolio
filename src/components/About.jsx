import React from "react";
import { CiMonitor } from "react-icons/ci";
import { CiServer } from "react-icons/ci";
import { IoLayers } from "react-icons/io5";
import { FaArrowAltCircleRight } from "react-icons/fa";

function About() {

  return (
    <div id="about" className="flex flex-col mt-32">

      <div className="flex flex-col justify-center items-center">
        <span className="text-4xl">About</span>
        <span className="text-green-500">Know me</span>
      </div>

      <div className="max-w-4xl mx-auto mt-8">
        <p className="text-lg leading-9 text-gray-300 text-justify">
          I'm a passionate Frontend React Developer with a strong interest in building modern, responsive, and user-centric web applications. I enjoy transforming ideas and designs into clean, scalable, and high-performance interfaces using React.js, JavaScript, Tailwind CSS, and modern frontend development practices.

          My professional journey began in the corporate environment at Tata Consultancy Services, where I developed strong analytical thinking, collaboration, and problem-solving skills while working on enterprise projects. During this time, I discovered my passion for software development and dedicated myself to mastering modern web technologies through continuous learning and hands-on project development.

          I have built several full-stack applications to strengthen my understanding of end-to-end development, but my primary passion lies in frontend engineering—creating intuitive user experiences, reusable component architectures, and responsive interfaces that deliver real value to users.

          I continuously strive to improve my technical skills, write clean and maintainable code, and stay updated with modern React best practices. I am currently seeking opportunities as a Frontend React Developer where I can contribute, grow alongside experienced engineers, and build products that make a meaningful impact.
        </p>
      </div>
    </div >
  );
}

export default About;
