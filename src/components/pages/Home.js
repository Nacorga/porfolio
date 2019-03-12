import React, { Component } from 'react';
import '../../styles/Home.scss';
import { Link } from "react-scroll";

class HomeComponent extends Component {

    render() {

        return(

            <div className="Hero">
                <div className="gradient"></div>
                <div className="row-banner">
                    <div className="banner-text">
                        <h1>Hello, I'm <span>Nacho Cortés</span></h1>
                        <h1>and I'm Front End developer</h1>
                    </div>
                    <Link activeClass="active" to="About" spy={true} smooth={true} offset={-70} duration={500}>
                        <button className="button">View my work<i className="fas fa-arrow-right"></i></button>
                    </Link>
                </div>
            </div>

        )
    }

}

export default HomeComponent;