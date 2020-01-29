import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Link } from 'react-router-dom';

function getClassIfActive(route) {
    return (route === window.location.pathname)
        ? "activeRoute"
        : "";
}

export default class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.popState = this.popState.bind(this);
    }

    componentDidMount(props) {
        window.addEventListener('popstate', this.popState);
    }

    popState() {
        this.setState({});
    }

    render() {
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
                                document.body.style.overflowY = 'hidden';
                                ReactDOM.unmountComponentAtNode(document.querySelector('.holder'));
                                window.scrollTo({ top: 0, left: 0 });
                                window.history.pushState(null, '', '/');
                                window.dispatchEvent(new Event('popstate'));
                                const space = document.getElementById('floatyspace');
                                space.style.display = 'flex';
                                space.classList.add('fade-in-1dot5s');
                                window.resetFloatySpace();
                                setTimeout(()=>{
                                    space.classList.remove('fade-in-1dot5s');
                                }, 1000);
                            }}>Home</a>
                        </li>
                        <li>
                            <Link to="/about" className={(window.location.pathname === "/about") ? "activeRoute" : ""} onClick={()=>{
                                window.dispatchEvent(new Event('popstate'));
                                document.getElementById("footer").classList.add("fade-in-1dot5s");
                            }}>About</Link>
                        </li>
                        {/* <li>
                            <Link to="/learning">Learning</Link>
                        </li> */}
                        <li>
                            <Link to="/skills" className={getClassIfActive("/skills")} onClick={()=>{
                                window.dispatchEvent(new Event('popstate'));
                                document.getElementById("footer").classList.add("fade-in-1dot5s");
                            }}>Skills</Link>
                        </li>
                        <li>
                            <Link to="/projects" className={getClassIfActive("/projects")} onClick={()=>{
                                window.dispatchEvent(new Event('popstate'));
                                document.getElementById("footer").classList.add("fade-in-1dot5s");
                            }}>Projects</Link>
                        </li>
                        <li>
                            <Link to="/contact"  className={getClassIfActive("/contact")} onClick={()=>{
                                window.dispatchEvent(new Event('popstate'));
                                document.getElementById("footer").classList.add("fade-in-1dot5s");
                            }}>Contact</Link>
                        </li>
                    </ul>
                </header>
            </div>
        );
    }
}