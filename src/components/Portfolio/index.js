import React from 'react';
import reportWebVitals from '../../reportWebVitals';
import projectData from './assets/projectData.json';
import Project from '../Project';

function Portfolio(props) {
  return (
    <section>
    <h2 id="Portfolio">
        Projects
    </h2>
    <div className="project-container">
        {projectData.map(data => (
            <Project
                name={data.name}
                image={data.image}
                github={data.github}
                deployed={data.deployed}
                key={data.id}
            />
        ))}
    </div>
</section>
  );
}

export default Portfolio;
