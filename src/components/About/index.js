import React from 'react';
import photo from './assets/images/picture-of-me.jpg';
import './assets/css/style.css'
const About = () => {
return(
    <section>
        <h1>
        About me
        </h1>
        <body>
            <div className="pic-container">
                <img className="bio-pic" src={photo} alt="Anthony Martinez"></img>
            </div>
        <p>My name is Anthony Martinez. I have been a Ag Service Technician for 7 years. As I get older I am starting to want to find a less physical job.
            So I am purssuing website coding and design along with all the backend technologies.
        </p>
        </body>
    </section>
)};

export default About;