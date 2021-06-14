import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../resources/TextValidator';
import SnackbarComponent from '../resources/Snackbar';
import { send } from 'emailjs-com';
import '../../styles/Contact.scss';

class ContactComponent extends Component {

    constructor() {

        super();

        this.state = {
            open: false,
            name: '',
            email: '',
            message: '',
        };

        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.closeSnackbar = this.closeSnackbar.bind(this);

    }

    handleInput(e) {

        const { value, name } = e.target;

        this.setState({
            [name]: value
        });

    }

    handleSubmit(e) {

        e.persist();

        const data = {
            from_name: this.state.name,
            from_email: this.state.email,
            message: this.state.message
        }

        const SERVICE_ID = process.env.REACT_APP_SERVICE_ID;
        const TEMPLATE_ID = process.env.REACT_APP_TEMPLATE_ID;
        const USER_ID = process.env.REACT_APP_USER_ID;

        send(SERVICE_ID, TEMPLATE_ID, data, USER_ID)
            .then(() => {
                this.setState({open: true});
                this.setState({
                    name: '',
                    email: '',
                    message: '',
                });
            })
            .catch(() => {
                alert("An error occurred, Please try again");
            });
        
    }

    closeSnackbar() {
        this.setState({open: false});
    }

    render() {

        return [

            <SnackbarComponent key="Sanckbar" open={this.state.open} closeFromChild={this.closeSnackbar} />

            ,

            <div key="Contact" className="contact-section">
                <div className="container">
                    <Fade bottom>
                        <div className="row">
                            <div className="col">
                                <h2 className="contact-title">{this.props.title}</h2>
                            </div>
                        </div>
                    </Fade>
                </div>

                <ValidatorForm id="contact-form" className="contact-form" ref="form" onSubmit={this.handleSubmit} debounceTime={250}>
                    <Fade bottom>
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <TextValidator onChange={this.handleInput} name="name" type="input" value={this.state.name} validators={['required', 'maxStringLength:25']} errorMessages={['This field is required', 'This field cannot be more than 25 characters long']} />
                                </div>
                                <div className="col-md-6">
                                    <TextValidator onChange={this.handleInput} name="email" type="input" value={this.state.email} validators={['required', 'isEmail']} errorMessages={['this field is required', 'email is not valid']} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <TextValidator onChange={this.handleInput} name="message" type="textarea" value={this.state.message} validators={['required', 'maxStringLength:255']} errorMessages={['This field is required', 'This field cannot be more than 255 characters long']} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col">
                                    <button type="submit" className="submit-btn float-right">Submit</button>
                                </div>
                            </div>
                        </div>
                    </Fade>
                </ValidatorForm>
                
            </div>

        ]

    }

}

export default ContactComponent;