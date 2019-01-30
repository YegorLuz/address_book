import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Filter from '../components/Filter';
import ContactsList from '../containers/ContactsList';
import { getContacts, deleteContact } from '../actions/';

class Home extends Component {
    constructor(props) {
        super(props);

        this.state = {
            filter: '',
        };

        this.onFilter = this.onFilter.bind(this);
    }

    componentDidMount () {
        this.props.getContacts();
    }

    onFilter (value) {
        this.setState({
            filter: value,
        });
    }

    render () {
        const { contacts } = this.props;
        const { filter } = this.state;

        return <div>
            <header>Contacts</header>
            <Filter
                value={filter}
                onChange={this.onFilter}
            />
            <ContactsList
                data={contacts}
                filter={filter}
                onDelete={this.props.deleteContact}
            />
            <div className='add-contact'>
                <Link to='add-contact'>Add Contact</Link>
            </div>
        </div>;
    }
}

Home.propTypes = {
    contacts: PropTypes.object.isRequired,
    getContacts: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
    contacts: state.home.get('contacts'),
});

const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(getContacts()),
    deleteContact: id => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);