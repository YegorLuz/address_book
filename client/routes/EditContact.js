import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Form from '../containers/Form';
import { List } from 'immutable';
import { updateContact } from '../actions/';

class EditContact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            id: parseInt(((props.match || {}).params || {}).id),
            name: '',
            email: '',
            phone: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    static getDerivedStateFromProps (props, state) {
        const { contacts } = props;

        if (contacts.size) {
            const { name, email, phone, id } = state;
            const contact = (contacts.filter(item => item.get('id') === id) || List([])).first() || null;

            if (contact && !name && !email && !phone) {
                const newData = {};
                const newName = contact.get('name');
                const newEmail = contact.get('email');
                const newPhone = contact.get('phone');

                if (newName !== name) {
                    newData.name = newName;
                }

                if (newEmail !== email) {
                    newData.email = newEmail;
                }

                if (newPhone !== phone) {
                    newData.phone = newPhone;
                }

                return newData;
            }
        }

        return null;
    }

    onChange (value, name) {
        this.setState({
            [name]: value,
        });
    }

    onSubmit () {
        this.props.updateContact({ ...this.state });
        this.props.history.goBack();
    }

    renderForm () {
        const { name, email, phone } = this.state;

        if (name || email || phone) {
            return <Form
                name={name}
                email={email}
                phone={phone}
                onChange={this.onChange}
                onSubmit={this.onSubmit}
            />;
        }

        return <div>No such contact in DB...</div>;
    }

    render () {
        return (
            <div>
                <header>Edit Contact</header>
                {this.renderForm()}
                <div>
                    <Link className="home-link" to="/" >go home</Link>
                </div>
            </div>
        );
    }
}

EditContact.propTypes = {
    contacts: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
    contacts: state.home.get('contacts'),
});

const mapDispatchToProps = dispatch => ({
    updateContact: data => dispatch(updateContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);