import React, { Component } from 'react';

import ViewProjectCircle from '../../public/images/projects/view_project_circle.png';
import { TinyRecipesModal } from './modals';

export default class ProjectCard extends Component {
    state = {
        modalVisible: false
    }

    setVisibilty = () => {
        this.setState({modalVisible: !this.state.modalVisible});
    }

    clickHandler = () => {
        const projectLink = this.props.projectLink;
        if (!projectLink.startsWith("http")) {
            this.setVisibilty();
        } else {
            window.open(this.props.projectLink);
        }
    }

    renderModal = () => {
        const projectLink = this.props.projectLink;
        if (projectLink === "tiny-recipes") {
            return <TinyRecipesModal visible={this.state.modalVisible} title="Tiny Recipes - Mobile App" toggleVisibility={this.setVisibilty} />;
        } else {
            return null;
        }
    }

    animationClass = "slide-in-left-1s";
    // animationClass = (this.props.index % 2 === 0) ? "slide-in-left-1s" : "slide-in-right-1s";
    animationDelay = `${this.props.index*0.3+0.5}s`;

    render() {
        return (
            <>
                <this.renderModal />
                <div 
                    className={`project shadow-large ${this.animationClass}`} 
                    style={{animationDelay:this.animationDelay}}
                    onClick={this.clickHandler}
                >
                    <div className="project-overlay"></div>
                    <img className="view-project-circle" src={ViewProjectCircle} />
                    <div className="project-image">
                        <img src={this.props.projectImg} />
                    </div>
                    <div className="project-info">
                        <h3>{this.props.projectName}</h3>
                        <p style={{whiteSpace: "pre-line"}}>{this.props.projectInfo}</p>
                        {/* <span 
                            className="linkNewTab"
                            onClick={()=>{window.open(props.projectLink)}}
                        >View Project</span> */}
                    </div>
                </div>
            </>
        );
    }
}