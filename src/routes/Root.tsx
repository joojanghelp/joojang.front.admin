import React, {useEffect} from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import * as Helper from 'lib/Helper';
import history from 'routes/History';

import {
    TestPage,
    LoginPage,
    UsersPage,
    BlankPage
} from 'components/pages';
import { RootState } from 'modules/redux';
import { useSelector } from 'react-redux';

interface RootProps  {
    Routerhistory: any
};

const Root = ({
    Routerhistory
} : RootProps) => {

    const router_state = useSelector((state: RootState) => state.router);

    useEffect(() => {
        if(!Helper.getAccessToken()) {
            if(router_state.location.pathname !== '/login') {
                history.push('/login');
            }
        }
    }, [router_state])
    return (
        <Router history={ Routerhistory }>
            <Switch>
                <Route path="/" exact={ true } component={ UsersPage } />
                <Route path="/blank" exact={ true } component={ BlankPage } />

                <Route path="/login" exact={ true } component={ LoginPage } />

                <Route path="/users" exact={ true } component={ UsersPage } />

                <Route path="/test" exact={ true } component={ TestPage } />
                <Redirect path="*" to="/login" />
            </Switch>
        </Router>
    );
}

export default Root;