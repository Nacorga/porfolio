import React, { Component } from 'react';
import '../../styles/Projects.scss';
import { projects } from '../../data/projects.json';

class ProjectsComponent extends Component {

    constructor() {

        super();

        this.state = {
            projects: projects
        }

    }

    render() {

        const projects = this.state.projects.map(proj => {
            return (
                <div className="project">
                    <div className="text">
                        <h3 className="project-title">{proj.title}</h3>
                        <p className="project-type">{proj.technology}</p>
                    </div>
                    <div className="button">Learn more</div>
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