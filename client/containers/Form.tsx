import * as React from 'react';
import Input from '../components/Input';
import Submit from '../components/Submit';
import { validateName, validateEmail, validatePhone } from '../utils/';
import '../styles/form.scss';

type TProps = {
    name: string,
    email: string,
    phone: string,
    submitButtonText?: string,
    onSubmit: () => void,
    onChange: (value: string, name?: string) => void,
};

type TState = {
    isNameValid: string,
    isEmailValid: string,
    isPhoneValid: string,
};

class Form extends React.PureComponent<TProps> {
    static defaultProps = {
        submitButtonText: 'Save',
    }

    state : TState;
    
    constructor(props: TProps) {
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

    onValidateName (name: string) {
        const { isNameValid } = validateName(name);

        if (this.state.isNameValid !== isNameValid) {
            this.setState({
                isNameValid,
            });
        }
    }

    onValidateEmail (email: string) {
        const { isEmailValid } = validateEmail(email);

        if (this.state.isEmailValid !== isEmailValid) {
            this.setState({
                isEmailValid,
            });
        }
    }

    onValidatePhone (phone: string) {
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
        const validationData : {
            isNameValid?: string,
            isEmailValid?: string,
            isPhoneValid?: string,
        } = {};

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

export default Form;