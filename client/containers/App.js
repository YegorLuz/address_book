import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getContacts } from '../actions/';

class App extends PureComponent {
    componentDidMount () {
        this.props.getContacts();
    }

    render () {
        return <div className="container">
            {this.props.children}
        </div>;
    }
}

const mapDispatchToProps = dispatch => ({
    getContacts: () => dispatch(getContacts()),
});

export default withRouter(connect(null, mapDispatchToProps)(App));