import * as React from 'react';
import * as ReactDOM from 'react-router-dom';
import ScreenLoader from '../components/ScreenLoader';
import AppContainer from '../containers';

const LoadableComponent = (path: string) =>
React.lazy(() => import(`./routes/${path}`));

export default (
	<ReactDOM.BrowserRouter>
        <React.Suspense fallback={<ScreenLoader />}>
            <AppContainer>
                <ReactDOM.Switch>
                    <ReactDOM.Route path={'/'} exact component={LoadableComponent('Home')} />
                    <ReactDOM.Route path={'/error'} exact component={LoadableComponent('Error')} />
                    <ReactDOM.Route component={LoadableComponent('PageNotFound')} />
                </ReactDOM.Switch>
            </AppContainer>
        </React.Suspense>
	</ReactDOM.BrowserRouter>
);