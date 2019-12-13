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

    render() {
        return (
            <div id="about" className="fade-in-1s" style={{ background: `url(${splashBackground})`, backgroundSize: 'cover' }}>
                <div id="about-header">
                    <h1>Edan Kriss</h1>
                    <h2>Web Developer</h2>
                </div>
                <img id="edan" src={EdanAvatar} />
                {/* <Pepsi /> */}
                <div id="about-overlay"></div>
            </div>
        );
    }
}