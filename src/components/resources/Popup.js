import React, { Component } from 'react';
import '../../styles/Popup.scss';
import Popup from "reactjs-popup";

class PopupComponent extends Component {

    render() {

        const contentStyle = {
            maxWidth: "850px",
            width: "90%"
        };

        return (

            <React.Fragment>
                <Popup open={this.props.open} lockScroll contentStyle={contentStyle} onClose={this.props.closeFromChild}>
                    {close => (                        
                        <div className="react-modal">
                            <div onClick={close} className="close-box">
                                <i className="fas fa-times"></i>
                            </div>
                            <div className="react-modal-body">
                                <div className="modal-text">
                                    <h3 className="react-modal-title">{this.props.data.title}</h3>
                                    <p className="react-modal-subtitle">{this.props.data.technology}</p>
                                    <p className="react-modal-description">{this.props.data.description}</p>
                                    <a className="react-modal-link" href={this.props.data.url} target="_blank" rel="noopener noreferrer">Go to this project</a>
                                </div>
                                <div className="image-box">
                                    <img src={this.props.data.img} alt={this.props.data.title}></img>
                                </div>
                            </div>
                        </div>
                    )}
                </Popup>
            </React.Fragment>

        )
    }

}

export default PopupComponent;