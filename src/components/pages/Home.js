import React, { Component } from 'react';
import '../../styles/Home.scss';
import { social } from '../../data/social.json';

import linkedin from '../../img/icons/linkedin-in-brands.svg';
import github from '../../img/icons/github-brands.svg';
import stackOverflow from '../../img/icons/stack-overflow-brands.svg';
import codepen from '../../img/icons/codepen-brands.svg';
import instagram from '../../img/icons/instagram-brands.svg';

class HomeComponent extends Component {

    constructor() {

        super();

        this.state = {
            social: social
        }

    }

    render() {

        const icons = [linkedin, github, stackOverflow, codepen, instagram];

        const socialItems = this.state.social.map((socialItem, i) => {

            return (
                <li className="social-item">
                    <a href={socialItem.url}>
                        <img src={icons[i]} alt={socialItem.name} className="icon"></img>
                    </a>
                </li>
            )

        });

        return(

            <div className="Hero">
                <div className="row-banner">
                    <div className="banner-text">
                        <h1>I'm Nacho Cortés</h1>
                        <h3>I'm a Madrid based <span>Front End developer </span>who creates powerful <span>applications</span> and <span>websites</span>. I could define myself as a detailist, committed and lover of nature, sport and photography. Let's start <span>scrolling</span> and learn more <span>about me</span>.</h3>
                    </div>
                    <ul className="social-list">
                        { socialItems }
                    </ul>
                </div>
            </div>

        )
    }

}

export default HomeComponent;