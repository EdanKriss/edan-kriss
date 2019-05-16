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
                <span 
                    className="linkNewTab"
                    onClick={()=>{window.open(props.projectLink)}}
                >View Project</span>
            </div>
        </div>
    );
}