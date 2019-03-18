import React, { Component } from 'react';
import { Link } from "react-scroll";
import Fade from 'react-reveal/Fade';
import '../../styles/Home.scss';

class HomeComponent extends Component {

    render() {

        return(

            <div className="Hero">
                <div className="gradient"></div>
                <div className="mountains"></div>
                <Fade delay={500} top>
                    <div className="row-banner">
                        
                            <div className="banner-text">
                                <h1>Hello, I'm <span>Nacho Cortés</span> and I'm Front End developer</h1>
                            </div>
                        <Link activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={500}>
                            <button className="button">View my work<i className="fas fa-arrow-right"></i></button>
                        </Link>
                    </div>
                </Fade>
            </div>

        )
    }

}

export default HomeComponent;