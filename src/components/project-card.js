import React from 'react';

export default (props) => {
    const animationClass = (props.index % 2 === 0) ? "slide-in-left-1s" : "slide-in-right-1s"

    return (
        <div className={`project shadow-large ${animationClass}`}>
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