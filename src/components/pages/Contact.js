import React, { Component } from 'react';
import '../../styles/Contact.scss';

class ContactComponent extends Component {

    render() {

        return (

            <div className="Contact">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <h2 className="contact-title">{this.props.title}</h2>
                        </div>
                    </div>
                </div>
                <form className="contact-form" onSubmit = {this.handleSubmit}>
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
                </form>
            </div>

        )

    }

}

export default ContactComponent;