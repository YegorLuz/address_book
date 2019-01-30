import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import Input from '../components/Input';
import Submit from '../components/Submit';
import { validateName, validateEmail, validatePhone } from '../utils/';
import '../styles/form.scss';

class Form extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            isNameValid: '',
            isEmailValid: '',
            isPhoneValid: '',
        };

        this.onValidateName = this.onValidateName.bind(this);
        this.onValidateEmail = this.onValidateEmail.bind(this);
        this.onValidatePhone = this.onValidatePhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onValidateName (name) {
        const { isNameValid } = validateName(name);

        if (this.state.isNameValid !== isNameValid) {
            this.setState({
                isNameValid,
            });
        }
    }

    onValidateEmail (email) {
        const { isEmailValid } = validateEmail(email);

        if (this.state.isEmailValid !== isEmailValid) {
            this.setState({
                isEmailValid,
            });
        }
    }

    onValidatePhone (phone) {
        const { isPhoneValid } = validatePhone(phone);

        if (this.state.isPhoneValid !== isPhoneValid) {
            this.setState({
                isPhoneValid,
            });
        }
    }

    onSubmit () {
        const { name, email, phone } = this.props;
        const { isNameValid, isEmailValid, isPhoneValid } = this.state;
        const validationData = {};

        if (!name) {
            validationData.isNameValid = 'Name is required';
        }

        if (!email) {
            validationData.isEmailValid = 'Email is required';
        }

        if (!phone) {
            validationData.isPhoneValid = 'Phone is required';
        }

        if (Object.keys(validationData).length > 0) {
            this.setState({
                ...validationData,
            });
        } else if (!isNameValid && !isEmailValid && !isPhoneValid) {
            this.props.onSubmit();
        }
    }

    render () {
        const { name, email, phone, submitButtonText } = this.props;

        return (
            <form>
                <Input
                    name={'name'}
                    placeholder='Name'
                    value={name}
                    validationMessage={this.state.isNameValid}
                    onChange={this.props.onChange}
                    onValidate={this.onValidateName}
                />
                <Input
                    name={'email'}
                    placeholder='Email address'
                    value={email}
                    validationMessage={this.state.isEmailValid}
                    onChange={this.props.onChange}
                    onValidate={this.onValidateEmail}
                />
                <Input
                    name={'phone'}
                    placeholder='Phone number'
                    value={phone}
                    validationMessage={this.state.isPhoneValid}
                    onChange={this.props.onChange}
                    onValidate={this.onValidatePhone}
                />
                <Submit text={submitButtonText} onSubmit={this.onSubmit} />
            </form>
        );
    }
}

Form.defaultProps = {
    submitButtonText: 'Save',
};

Form.propTypes = {
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    submitButtonText: PropTypes.string,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default Form;