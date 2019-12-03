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

            <div id="lead-down">
                <span onClick={() => { window.scrollTo({ top: document.body.scrollHeight, left: 0, behavior: "smooth" }); }}>
                    <i className="fa fa-chevron-down" aria-hidden="true"></i>
                </span>
            </div>
        </div>
    );
}