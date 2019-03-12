import React, { Component } from 'react';
import '../../styles/Social.scss';
import { social } from '../../data/social.json';

class SocialComponent extends Component {

    constructor() {

        super();

        this.state = {
            social: social
        }

    }

    render() {

        const socialItems = this.state.social.map((socialItem, i) => {

            return (
                <li className="social-item" key={i}>
                    <a href={socialItem.url}>
                        <i className={"icon fab fa-" + socialItem.icon}></i>
                    </a>
                </li>
            )

        });

        return(

            <div className="Social">
                <ul className="social-list">
                    { socialItems }
                </ul>
            </div>

        )
    }

}

export default SocialComponent;