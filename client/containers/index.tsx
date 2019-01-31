import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';
import App from './App';
import '../styles/common.scss';

type IProps = {
    children: [] | {} | null,
};

const AppContainer = (props: IProps) => (
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