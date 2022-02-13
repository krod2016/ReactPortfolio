import React from 'react';
import pdf from '../resume/Katrina-Resume.pdf';

function Resume() {
    return (
        <section class="container">
        <div className="resume" class="mt-5">
        <h2 class="justify-content-center" >My Resume</h2>
        <p><a class="resumelink" href = {pdf}> Download My Resume Here</a></p>
        </div>
        <hr></hr>
       <div class="justify-content-center mt-5">
        <div>
          <h2 className="top-title">I am proficient in the following languages:</h2>
        <p>
            CSS, Express.js, Handlebars, Heroku, HTML, Insomnia, JavaScript, <br />
            MongoDB, Mongoose, MySQL, NoSQL, Node.js, React.js, Yarn.js<br />
        </p>
        </div>
      </div>
      <hr></hr>
        </section>
    );
}

export default Resume;