import React from 'react';
import { Link } from 'react-router-dom';

export default (props) => {
    return (
        <div>
            <div id="mobile-menu-open" className="shadow-large">
                <i className="fa fa-bars" aria-hidden="true"></i>
            </div>
            <header>
                <div id="mobile-menu-close">
                    <span>Close</span> <i className="fa fa-times" aria-hidden="true"></i>
                </div>
                <ul id="menu" className="shadow">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/learning">Learning</Link>
                    </li>
                    <li>
                        <Link to="/skills">Skills</Link>
                    </li>
                    <li>
                        <Link to="/projects">Projects</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </header>
        </div>
    );
}