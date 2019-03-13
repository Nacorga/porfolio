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
                    <Slide left cascade>
                        <div className="bar-fill" style={{width: bar.percent + '%'}}></div>
                        <div className="tag">{bar.name}</div>
                    </Slide>
                    <span className="percent">{bar.percent}%</span>
                </div>
            )
        });

        return (            
            <div className="Bars">
                { bars }
            </div>
        )

    }

}

export default BarsComponent;