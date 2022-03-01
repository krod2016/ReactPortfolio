import React from 'react';
import Project from '../../components/projects';

const projects = [
  {
    id: 0,
    title: "Budget Tracker",
    languages: "CSS, Express.js, Heroku, HTML, JavaScript, MongoDB, Node.js",
    image: 'images/budgettracker.png',
    description: "An easy way to track your finances while travelling. This app can be used with and without internet.",
    github: "https://github.com/krod2016/BudgetTracker",
    link: "https://krod2016.github.io/BudgetTracker/"
  },
  {
    id: 1,
    title: "Employee Tracker",
    languages: "Inquirer, JavaScript, Jest, MySQL, Node.js",
    image: 'images/employeetracker.png',
    description: "A convienent way for managers to organize their employees.",
    github: "https://github.com/krod2016/EmployeeTracker",
    link: "https://watch.screencastify.com/v/Ag2A0Kj1wkdUFTfY8b7p"
  },
  {
    id: 2,
    title: "Git to the Show",
    languages: "Bulma, CSS, HTML, JavaScript, position Stack API, Ticketmaster API",
    image: 'images/gitshow.png',
    description: "Git to the Show allows users to find music events near them, while allowing them to save their favorites, or navigate to a corresponding Ticketmaster page.",
    github: "https://github.com/DianeTritchler/Project1-Group6",
    link: "https://dianetritchler.github.io/Project1-Group6/"
  },
  {
    id: 3,
    title: "MyBrary",
    languages: "JavaScript, Node.js, Express.js, MySQL, Sequelize, CSS",
    image: "images/mybrary.png",
    description: "MyBrary is your home for interactive book rentals. MyBrary allows users to rent, review, vote for, add, and delete their favorite books to the website.",
    github: "https://github.com/Dustin2400/Mybrary",
    link: "http://mybrary2400.herokuapp.com/"
  },
  {
    id: 4,
    title: "Password Generator",
    languages: "CSS, HTML, JavaScript",
    image: 'images/passwordgenerator.png',
    description: "This website was created so a company can create a strong password.",
    github: "https://github.com/krod2016/friendlyParakeet",
    link: "https://krod2016.github.io/friendlyParakeet/"
  },
  {
    id: 5,
    title: "Team Profile Generator",
    languages: "CSS, HTML, JavaScript, Node.js",
    image: "images/tpg.png",
    description: "This team profile generator allows managers to input their employees information, and have the information dynamically shown on an HTML page.",
    github: "https://github.com/krod2016/TeamProfileGenerator",
    link: "https://watch.screencastify.com/v/UL7hLqNFJyRraW2LfLnt"
  },
  {
    id: 6,
    title: "Program-Her",
    languages: "",
    image: "",
    description: "This page allows women to connect through coding, and supporting each other in their daily lives.",
    github: "https://github.com/candre02/Program-Her",
    link: ""
  }
];

function Portfolio() {

    return(
      <section className="container">
          <hr></hr>
            <h2 id="portfolio"> Portfolio </h2>

            <Project projects={projects} />
            <hr></hr>
        </section>
    );
}

export default Portfolio;
