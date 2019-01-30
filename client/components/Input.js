import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Input extends PureComponent {
    constructor(props) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange (event) {
        const { name } = this.props;
        const value = event.target.value;

        this.props.onChange(value, name);
        if (this.props.onValidate) {
            this.props.onValidate(value);
        }
    }

    render () {
        const { type, placeholder, value, validationMessage } = this.props;

        return (
            <div className="input">
                <input
                    type={type}
                    value={value}
                    placeholder={placeholder}
                    onChange={this.onChange}
                />
                {!!validationMessage ? <p className="invalid">{validationMessage}</p> : null}
            </div>
        );
    }
}

Input.defaultProps = {
    type: 'text',
    name: '',
    placeholder: '',
    validationMessage: '',
};

Input.propTypes = {
    type: PropTypes.string,
    name: PropTypes.string,
    placeholder: PropTypes.string,
    value: PropTypes.string.isRequired,
    validationMessage: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    onValidate: PropTypes.func,
};

export default Input;