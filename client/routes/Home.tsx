import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { List, Map } from 'immutable';
import Filter from '../components/Filter';
import ContactsList from '../containers/ContactsList';
import { getContacts, deleteContact } from '../actions/';

type TState = {
    filter: string,
};

type IAction = {
    getContacts: () => void,
    deleteContact: (id: string) => void,
}

type IProps = {
    contacts: List<Map<string, any>>,
}

class Home extends React.Component<IProps & IAction> {
    state: TState

    constructor(props: IProps & IAction) {
        super(props);

        this.state = {
            filter: '',
        };

        this.onFilter = this.onFilter.bind(this);
    }

    componentDidMount () {
        this.props.getContacts();
    }

    onFilter (value: string) {
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

const mapStateToProps = (state: { home: Map<string, any> }) : IProps => ({
    contacts: state.home.get('contacts'),
});

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({
    getContacts: () => dispatch(getContacts()),
    deleteContact: (id: string) => dispatch(deleteContact(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);