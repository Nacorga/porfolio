import React from 'react';
import { ValidatorComponent } from 'react-form-validator-core';

class TextValidator extends ValidatorComponent {

    render() {

        const { errorMessages, validators, requiredError, validatorListener, ...rest } = this.props;

        return (
            <div className="form-group">
                <this.props.type className="form-control" placeholder={this.props.name}
                    {...rest}
                    ref={(r) => { this.input = r; }}
                />
                {this.errorText()}
            </div>
        );

    }

    errorText() {
        const { isValid } = this.state;

        if (isValid) {
            return null;
        }

        return (
            <div className="text-validator">
                {this.getErrorMessage()}
            </div>
        );
    }
}

export default TextValidator;