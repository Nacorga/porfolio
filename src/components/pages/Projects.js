import React, { Component } from 'react';
import '../../styles/Projects.scss';
import { projects } from '../../data/projects.js';
import Flip from 'react-reveal/Flip';
import PopupComponent from '../resources/Popup';

class ProjectsComponent extends Component {

    constructor() {

        super();

        this.state = {
            projects: projects,
            project: undefined,
            open: false
        };

        this.openModal = this.openModal.bind(this);
        this.closeModal = this.closeModal.bind(this);

    }

    openModal(proj){
        this.setState({ project: proj, open: true });
    }

    closeModal() {
        this.setState({ project: undefined, open: false });
    }

    render() {

        const projects = this.state.projects.map((proj, i) => {
            
            return (

                <div className="project" style={{backgroundImage: "url(" + proj.img + ")"}} key={i}>
                    <div className="text">
                        <h3 className="project-title">{proj.title}</h3>
                        <p className="project-type">{proj.technology}</p>
                    </div>
                    <div className="button" onClick={this.openModal.bind(this, proj)}>Learn more</div>
                </div>
                
            )
        });

        return [

            <Flip bottom cascade key="flip">
                <div className="projects-section">
                    { projects }
                </div>
            </Flip>

            ,

            <PopupComponent key="popup" data={this.state.project} open={this.state.open} closeFromChild={this.closeModal} />

        ]

    }

}

export default ProjectsComponent;