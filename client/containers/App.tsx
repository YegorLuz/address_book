import * as React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getContacts } from '../actions/';
import { RouteComponentProps } from 'react-router';

type IProps = {};

interface IActions {
    getContacts?: () => void,
};

class App extends React.PureComponent<RouteComponentProps<any> & IActions> {
    componentDidMount () {
        this.props.getContacts();
    }

    render () {
        return (<div className="container">
            {this.props.children}
        </div>);
    }
}

const mapStateToProps = () : IProps => ({});

const mapDispatchToProps = (dispatch: React.Dispatch<any>) : IActions => ({
    getContacts: () => dispatch(getContacts()),
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));