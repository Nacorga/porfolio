import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import '../../styles/Contact.scss';

class ContactComponent extends Component {

    render() {

        return (

            <div className="contact-section">
                <div className="container">
                    <Fade bottom>
                        <div className="row">
                            <div className="col">
                                <h2 className="contact-title">{this.props.title}</h2>
                            </div>
                        </div>
                    </Fade>
                </div>
                <form className="contact-form" onSubmit = {this.handleSubmit}>
                    <Fade bottom>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="name" className="form-control" placeholder="Name..." onChange={this.handleInput}></input>
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <input type="text" name="email" className="form-control" placeholder="Email..." onChange={this.handleInput}></input>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <div className="form-group">
                                        <textarea type="text" name="message" className="form-control" placeholder="Message..." onChange={this.handleInput}></textarea>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type="submit" className="submit-btn float-right">Submit</button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </form>
            </div>

        )

    }

}

export default ContactComponent;