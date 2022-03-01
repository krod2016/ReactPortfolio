import React from 'react';
import coverImage from './katrina.jpg';

function About() {
  return (
    <section className="my-5">
          <hr></hr>
      <h1 id="about">About Me</h1>
      <img src={coverImage} className="my-2" style={{ width: "30%" }} alt="cover" />
      <div className="my-2">
        <p>
        Hello! Thank you for reading my portfolio. My name is Katrina Rodriguez, and I am from San Antonio, Texas. I am a recent graduate of the Full Stack Developer Bootcamp from UT-Austin. I also have a bachelors of Science from Utah State University (Go Aggies!) in Anthropology, and a certificate in Museum Studies. I love to learn about everything, and anything that I can get my hands on.
        </p>
      </div>
    </section>
  );
}

export default About;