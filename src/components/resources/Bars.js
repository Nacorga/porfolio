import React, { Component } from 'react';
import '../../styles/Bars.scss';
import { bars } from '../../data/bars.json';
import Slide from 'react-reveal/Slide';

class BarsComponent extends Component {

    constructor() {

        super();

        this.state = {
            bars: bars
        }

    }

    render() {

        const bars = this.state.bars.map((bar, i) => {
            return (
                <div className="bar-flex" key={i}>
                    <div className="bar-fill" style={{width: bar.percent + '%'}}>
                        <div className="tag">{bar.name}</div>
                    </div>
                    <span className="percent">{bar.percent}%</span>
                </div>
            )
        });

        return (

            <Slide right cascade>
                <div className="Bars">
                    { bars }
                </div>
            </Slide>

        )

    }

}

export default BarsComponent;