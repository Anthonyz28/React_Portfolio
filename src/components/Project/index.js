import React from 'react';
import './assets/css/style.css'

function Project(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.name} src={props.image} />
      </div>
      <div className="content">
        <ul>
          <li>
            <strong>Name:</strong> {props.name}
          </li>
          <li>
            <strong>Github:</strong> {props.github}
          </li>
          <li>
            <strong>Deployed:</strong> {props.deployed}
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Project;