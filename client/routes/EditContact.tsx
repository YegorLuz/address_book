import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import Form from '../containers/Form';
import { List, Map } from 'immutable';
import { updateContact } from '../actions/';

type TState = {
    id: number,
    name: string,
    email: string,
    phone: string,
};

type TAction = {
    updateContact: (data: TState) => void,
};

type PathParamsType = {
    id: string,
};

type TProps = RouteComponentProps<PathParamsType> & {
    contacts: List<Map<string, any>>,
};



class EditContact extends React.Component<TProps & TAction> {
    state: TState

    constructor(props: TProps & TAction) {
        super(props);

        this.state = {
            id: parseInt(props.match.params.id),
            name: '',
            email: '',
            phone: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    static getDerivedStateFromProps (props: TProps, state: TState) {
        const { contacts } = props;

        if (contacts.size) {
            const { name, email, phone, id } = state;
            const contact = (contacts.filter(item => item.get('id') === id) || List([])).first() || null;

            if (contact && !name && !email && !phone) {
                const newData : {
                    name?: string,
                    email?: string,
                    phone?: string,
                } = {};
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

    onChange (value: string, name?: string) {
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

const mapStateToProps = (state: { home: Map<string, any> }) => ({
    contacts: state.home.get('contacts'),
});

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({
    updateContact: (data: TState) => dispatch(updateContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EditContact);