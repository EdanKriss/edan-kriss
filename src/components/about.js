import React, { Component } from 'react';

import EdanAvatar from '../../public/images/edan.jpg';
// import Pepsi from './pepsi';
import splashBackground from '../../public/images/lead-bg.jpg';

export default class About extends Component {
    componentDidMount() {
        console.log("About did mount");
        const about = document.getElementById('about');
        footer.addEventListener('animationend', (event) => {
            if (event.animationName === 'fadeIn') {
                if (footer.classList.contains('fade-in-1s')) {
                    footer.classList.remove('fade-in-1s');
                }
            }
        });
    }

    buildHexagons() {
        const hexagonArray = [
            {
                iconClassName: "mdi mdi-speedometer",
                hexagonHeader: "SPEED",
                hexagonText: "Time is the primary resource"
            },
            {
                iconClassName: "mdi mdi-cellphone-link",
                hexagonHeader: "REACH",
                hexagonText: "Default to cross-platform"
            },
            {
                iconClassName: "mdi mdi-lightbulb-outline",
                hexagonHeader: "WISDOM",
                hexagonText: "Avoid technical debt"
            },
            {
                iconClassName: "mdi mdi-chart-line",
                hexagonHeader: "GROWTH",
                hexagonText: "Applications must scale"
            },
        ];
        return (
            <div className="row">
                {hexagonArray.map((value, index)=>{
                    return (
                        <div className="col-xs-6 col-md-3" key={`hexagon ${index}`}>
                            <div className={`hexagon flip-in-x-1dot5s`} style={{animationDelay: `${index*0.3+0.5}s`}}>
                                <i className={`${value.iconClassName}`}></i>
                            </div>
                            <div className="hexagon-header">
                                <h5>{value.hexagonHeader}</h5>
                                <h6>{value.hexagonText}</h6>
                            </div>
                        </div>
                    );
                })}
            </div>
        );
    }

    render() {
        return (
            <div id="about" 
                className="fade-in-1s" 
                // style={{ 
                //     background: `url(${splashBackground})`, 
                //     backgroundSize: 'cover' 
                // }}
            >
                <div id="about-overlay"></div>
                <div id="about-header">
                    <h1>Edan Kriss</h1>
                    <h2>Web Developer</h2>
                </div>
                <img id="edan" src={EdanAvatar} />
                <this.buildHexagons />
                {/* <Pepsi /> */}
            </div>
        );
    }
}