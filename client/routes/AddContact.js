import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from '../containers/Form';
import { addContact } from '../actions/';

class AddContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange (value, name) {
        this.setState({
            [name]: value,
        });
    }

    onSubmit () {
        this.props.saveContact({ ...this.state });
        this.props.history.goBack();
    }

    render () {
        const { name, email, phone } = this.state;

        return (
            <div>
                <header>Add Contact</header>
                <Form
                    name={name}
                    email={email}
                    phone={phone}
                    onChange={this.onChange}
                    onSubmit={this.onSubmit}
                />
                <div>
                    <Link className="home-link" to="/" >go home</Link>
                </div>
            </div>
        );
    }
}

AddContact.propTypes = {
    saveContact: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    saveContact: data => dispatch(addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);