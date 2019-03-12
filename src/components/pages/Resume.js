import React, { Component } from 'react';
import '../../styles/Resume.scss';
import { education } from '../../data/education.json';
import { works } from '../../data/works.json';
import Slide from 'react-reveal/Slide';

class ResumeComponent extends Component {

    constructor() {

        super();

        this.state = {
            education: education,
            works: works
        }

    }

    render() {

        const education = this.state.education.map((edu, i) => {
            return (
                <li className="list-item" key={i}>
                    <h3 className="item-title">{edu.school}</h3>
                    <p className="item-info">
                        <span className="work-role">{edu.certificate}</span>
                        <span className="ball-separator">•</span>
                        <span className="item-dates">{edu.dates}</span>
                    </p>
                </li>
            )
        });

        const works = this.state.works.map((work, i) => {
            return (
                <li className="list-item" key={i}>
                    <h3 className="item-title">{work.title}</h3>
                    <p className="item-info">
                        <span className="work-role">{work.role}</span>
                        <span className="ball-separator">•</span>
                        <span className="item-dates">{work.dates}</span>
                    </p>
                    <p className="item-description">{work.description}</p>
                    <div className="pills">
                        {
                            work.technologies.map((tech, e) => {
                                return (
                                    <span className="badge badge-pill" key={e}>{tech}</span>
                                )
                            })
                        }
                    </div>
                </li>
            )
            
        });

        return(

            <div className="Resume">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <Slide left>
                                <h2 className="resume-title"><span>Education</span></h2>
                            </Slide>
                        </div>
                        <div className="col-md-8">
                        <ul className="education-list">
                            <Slide right>
                                { education }
                            </Slide>
                        </ul>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <Slide left>
                                <h2 className="resume-title"><span>Works</span></h2>
                            </Slide>
                        </div>
                        <div className="col-md-8">
                            <ul className="works-list">
                                <Slide right>
                                    { works }
                                </Slide>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

        )

    }

}

export default ResumeComponent;