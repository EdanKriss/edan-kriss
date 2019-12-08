import React from 'react';
import ReactDOM from 'react-dom';
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
                        {/* <Link to="/">Home</Link> */}
                        <a onClick={()=>{
                            ReactDOM.unmountComponentAtNode(document.querySelector('.holder'));
                            window.history.pushState(null, '', '/');
                            const space = document.getElementById('floatyspace');
                            space.style.display = 'flex';
                            space.classList.add('fade-in-1dot5s');
                            setTimeout(()=>{
                                space.classList.remove('fade-in-1dot5s');
                            }, 1000);
                        }}>Home</a>
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