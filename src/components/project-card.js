import React from 'react';

export default (props) => {
    const animationClass = (props.index % 2 === 0) ? "slide-in-left-1s" : "slide-in-right-1s";
    const animationDelay = `${props.index*0.3+0.5}s`;

    return (
        <div className={`project shadow-large ${animationClass}`} style={{animationDelay:animationDelay}}>
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