import React from 'react';

import splashBackground from '../../public/images/lead-bg.jpg';

export default (props) => {
    return (
        <div id="lead" style={{ background: `url(${splashBackground})`, backgroundSize: 'cover' }}>
            <div id="lead-content">
                <h1>Edan Kriss</h1>
                <h2>Web Developer</h2>
                <div className="btn-rounded-white">My Responsive Portfolio</div>
            </div>

            <div id="lead-overlay"></div>
        </div>
    );
}