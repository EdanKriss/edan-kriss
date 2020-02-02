import React, { Component } from 'react';
import { connect } from 'react-redux';

import ProjectCard from "./project-card.js";

class Projects extends Component {
    state = {
        noteCollapsed: true
    }

    renderProjects() {
        return this.props.projects.map((project, index) => {
            return (
                <ProjectCard
                    key={project.projectName}
                    projectName={project.projectName}
                    projectLink={project.projectLink}
                    projectImg={project.projectImg}
                    projectInfo={project.projectInfo}
                    index={index}
                />
            );
        });
    }

    render() {
        const noteIconClass = this.state.noteCollapsed ? "glyphicon-menu-down" : "glyphicon-menu-up";
        return (
            <div id="projects" className="background-alt">
                <h2 className="heading">Projects</h2>
                <br/><br/>

                <div className="container">
                    <div className="row">
                        <a id="project-note" data-toggle="collapse" href="#collapseNote" onClick={()=>{this.setState({noteCollapsed:!this.state.noteCollapsed})}}>
                            <div className="panel panel-info">
                                <div className="panel-heading">
                                    <h4 className="panel-title">Note Regarding Projects</h4>
                                    <span className={`glyphicon ${noteIconClass}`}></span>
                                </div>
                                
                                <div id="collapseNote" className="panel-collapse collapse">
                                    <div className="alert-info">
                                        <div className="panel-body">My projects are currently hosted on one of several cloud provider's free tier, non-persistant servers.
                                            <br/><br/>Initial page load may exceed 5 seconds!
                                            <br/><br/>Click/Tap a project to see a live demo, if available.
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>
                <br/>

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