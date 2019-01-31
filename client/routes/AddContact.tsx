import * as React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router';
import Form from '../containers/Form';
import { addContact } from '../actions/';

type TState = {
    name: string,
    email: string,
    phone: string,
};

type IAction = {
    saveContact: (data: TState) => void,
}

type IProps = RouteComponentProps & {};

class AddContact extends React.Component<IProps & IAction> {
    state: TState

    constructor(props: IProps & IAction) {
        super(props);

        this.state = {
            name: '',
            email: '',
            phone: '',
        };

        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onChange (value: string, name?: string) {
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

const mapStateToProps = () => ({});

const mapDispatchToProps = (dispatch: React.Dispatch<any>) => ({
    saveContact: (data: TState) => dispatch(addContact(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(AddContact);