import * as React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import * as Loadable from 'react-loadable';
import ScreenLoader from '../components/ScreenLoader';
import AppContainer from '../containers';

const LoadableComponent = (path: string) => Loadable({
    loader: () => import(`./${path}`),
    loading: ScreenLoader,
    render (loaded, props) {
        const Comp = loaded.default;
        return <Comp {...props} />;
    },
});

export default (
    <BrowserRouter>
        <AppContainer>
            <Switch>
                <Route path={'/'} exact component={LoadableComponent('Home')} />
                <Route path={'/add-contact'} exact component={LoadableComponent('AddContact')} />
                <Route path={'/edit-contact/:id'} exact component={LoadableComponent('EditContact')} />
                <Route component={LoadableComponent('PageNotFound')} />
            </Switch>
        </AppContainer>
    </BrowserRouter>
);