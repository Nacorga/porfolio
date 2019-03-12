import React, { Component } from 'react';
import SocialComponent from './resources/Social';
import '../styles/Footer.scss';

class FooterComponent extends Component {

    render() {

        return (

            <div className="Footer container">
                <div className="row">
                    <div className="col">    
                        <SocialComponent />
                    </div>
                </div>
                <div className="row">
                    <div className="col">    
                        <p className="credits">NaCorGa <span>©2019</span></p>
                    </div>
                </div>
            </div>

        )

    }

}

export default FooterComponent;