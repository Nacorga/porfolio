import React, { Component } from 'react';
import '../../styles/About.scss';
import placeholder from '../../img/nacorga.png';
import SocialComponent from '../resources/Social';
import BarsComponent from '../resources/Bars';

class AboutComponent extends Component {

    render() {

        return (

            <div className="About row">
                <div className="col-md-6">
                    <div className="placeholder-box">
                        <div className="placeholder gradient-box">
                            <img src={placeholder} alt="Nacorga"></img>
                        </div>
                    </div>
                    <div className="row-text">
                        <h3>Who's this guy?</h3>
                        <p>I'm a Madrid based <span>Front End developer </span>who creates powerful <span>applications</span> and <span>websites</span>. I could define myself as a detailist, committed and lover of nature, sport and photography.</p>
                    </div>
                    <SocialComponent />
                </div>
                <div className="col-md-6">
                    <BarsComponent />
                </div>
            </div>

        )

    }

}

export default AboutComponent;