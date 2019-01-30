import React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';
import App from './App';
import '../styles/common.scss';

const AppContainer = props => (
    <Provider store={store}>
        <App>
            {props.children}
        </App>
    </Provider>
);

AppContainer.defaultProps = {
    children: {},
};

export default AppContainer;