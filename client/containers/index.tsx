import * as React from 'react';
import { Provider } from 'react-redux';
import store from '../store/index';

type Props = {
	children: React.ReactNode
}

const AppContainer = (props: Props) : JSX.Element => (
	<Provider store={store}>
        {props.children}
	</Provider>
);

AppContainer.defaultProps = {
	children: {},
};

export default AppContainer;