import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class Submit extends PureComponent {
    constructor(props) {
        super(props);

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit (event) {
        event.preventDefault();
        this.props.onSubmit();
    }

    render () {
        const { text } = this.props;

        return (
            <div className="button">
                <input
                    type="submit"
                    value={text}
                    onClick={this.onSubmit}
                />
            </div>
        );
    }
}

Submit.propTypes = {
    text: PropTypes.string.isRequired,
    onSubmit: PropTypes.func.isRequired,
};

export default Submit;