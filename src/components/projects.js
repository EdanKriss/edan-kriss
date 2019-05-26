import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectCard from "./project-card.js";

class Projects extends Component {
    renderProjects() {
        return this.props.projects.map((project) => {
            return (
                <ProjectCard
                    key={project.projectName}
                    projectName={project.projectName}
                    projectLink={project.projectLink}
                    projectImg={project.projectImg}
                    projectInfo={project.projectInfo}
                />
            );
        });
    }

    render() {
        return (
            <div id="projects" className="background-alt">
                <h2 className="heading">Projects</h2>
                <br/><br/>

                <div className="container">
                    <div className="row">
                        <a id="project-note" data-toggle="collapse" href="#collapseNote">
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    <h4 className="panel-title">Note Regarding Projects</h4>
                                    <span className="glyphicon glyphicon-menu-down"></span>
                                </div>
                                
                                <div id="collapseNote" className="panel-collapse collapse">
                                    <div className="alert-info">
                                        <div className="panel-body">My projects are currently hosted on Heroku's non-persistant dynos.
                                            <br/>Initial page load may exceed 5 seconds!
                                            <br/>Feedback is greatly appreciated!
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <br/><br/>

                <div className="container">
                    <div className="row">
                        {this.renderProjects()}
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        projects: state.projects
    };
}

export default connect(mapStateToProps)(Projects);