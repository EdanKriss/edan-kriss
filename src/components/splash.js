import React, { Component } from 'react';

export default class Splash extends Component {
    render() {
        return (
            <div id="lead">
                <div id="lead-content">
                    <h1>Edan Kriss</h1>
                    <h2>Longtime Software Enthusiast</h2>
                    <a href="#" className="btn-rounded-white">My Responsive Portfolio</a>
                </div>

                <div id="lead-overlay"></div>

                <div id="lead-down">
                    <span>
                        <i className="fa fa-chevron-down" aria-hidden="true"></i>
                    </span>
                </div>
            </div>
        );
    }
}