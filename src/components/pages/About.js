import React, { Component } from 'react';
import '../../styles/About.scss';
import placeholder from '../../img/nacorga.png';

class AboutComponent extends Component {

    render() {

        return (

            <div className="About row">
                <div className="col-md-8">
                    <h2 className="section-title">About me</h2>
                    <div className="bio">
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
                        <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                    </div>
                </div>
                <div className="placeholder-box">
                    <div className="placeholder gradient-box">
                        <img src={placeholder} alt="Nacorga"></img>
                    </div>
                </div>
            </div>

        )

    }

}

export default AboutComponent;