import React, { Component } from 'react';
import '../../styles/Bars.scss';
import { bars } from '../../data/bars.json';

class BarsComponent extends Component {

    constructor() {

        super();

        this.state = {
            bars: bars
        }

    }

    render() {

        const bars = this.state.bars.map(bar => {
            return (
                <div className="bar-flex">
                    <div className="bar-fill" style={{width: bar.percent + '%'}}>
                        <div className="tag">{bar.name}</div>
                    </div>
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