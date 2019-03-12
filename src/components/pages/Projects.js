import React, { Component } from 'react';
import '../../styles/Projects.scss';
import { projects } from '../../data/projects.js';
import Popup from "reactjs-popup";

class ProjectsComponent extends Component {

    constructor() {

        super();

        this.state = {
            projects: projects
        };

    }

    render() {

        const contentStyle = {
            maxWidth: "850px",
            width: "90%"
        };

        const projects = this.state.projects.map((proj, i) => {
            return (
                <div className="project" style={{backgroundImage: "url(" + proj.img + ")"}} key={i}>
                    <div className="text">
                        <h3 className="project-title">{proj.title}</h3>
                        <p className="project-type">{proj.technology}</p>
                    </div>
                    <Popup trigger={<div className="button">Learn more</div>} modal lockScroll contentStyle={contentStyle}>
                    {close => (                        
                        <div className="react-modal">
                            <div onClick={close} className="close-box">
                                <i class="fas fa-times"></i>
                            </div>
                            <div className="react-modal-body">
                                <div className="modal-text">
                                    <h3 className="react-modal-title">{proj.title}</h3>
                                    <p className="react-modal-subtitle">{proj.technology}</p>
                                    <p className="react-modal-description">{proj.description}</p>
                                    <a className="react-modal-link" href={proj.url} target="_blank">Go to this project</a>
                                </div>
                                <div className="image-box">
                                    <img src={proj.img} alt={proj.name}></img>
                                </div>
                            </div>
                        </div>
                    )}
                    </Popup>
                    
                </div>
            )
        });

        return (

            <div className="Projects">
                { projects }
            </div>

        )

    }

}

export default ProjectsComponent;