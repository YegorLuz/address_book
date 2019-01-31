import * as React from 'react';

type TProps = {
    type?: string,
    name?: string,
    placeholder?: string,
    validationMessage?: string,
    value: string,
    onChange: (value: string, name?: string) => void,
    onValidate?: (value: string) => void,
};

class Input extends React.PureComponent<TProps> {
    static defaultProps = {
        type: 'text',
        name: '',
        placeholder: '',
        validationMessage: '',
    }

    constructor(props: TProps) {
        super(props);

        this.onChange = this.onChange.bind(this);
    }

    onChange (event: React.BaseSyntheticEvent) {
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

export default Input;