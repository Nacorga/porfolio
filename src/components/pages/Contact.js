import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { ValidatorForm } from 'react-form-validator-core';
import TextValidator from '../resources/TextValidator';
import SnackbarComponent from '../resources/Snackbar';
import axios from 'axios';
import '../../styles/Contact.scss';

class ContactComponent extends Component {

    constructor() {

        super();

        this.state = {
            name: '',
            email: '',
            message: '',
            open: false
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

        e.persist(); // No screen refresh

        this.setState({open: true}); // Open snackbar

        // Send data to the server
        const { name, email, message } = this.state;
        
        axios.post('../../src/form.php', { name, email, message }).then(res => {
            console.log(res);
            console.log(res.data);
        });

        // Reset form
        this.setState({
            name: '',
            email: '',
            message: '',
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