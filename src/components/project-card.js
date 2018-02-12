import React from 'react';

export default (props) => {
    return (
        <div className="project shadow-large">
            <div className="project-image">
                <img src={props.projectImg} />
            </div>
            <div className="project-info">
                <h3>{props.projectName}</h3>
                <p>{props.projectInfo}</p>
                <a href={props.projectLink}>View Project</a>
            </div>
        </div>
    );
}