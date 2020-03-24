import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";

import {
    TestPage,
    LoginPage,
} from "components/pages";

interface RootProps  {
    Routerhistory: any
};

const Root = ({
    Routerhistory
} : RootProps) => {

    return (
        <Router history={ Routerhistory }>
            <Switch>
                <Route path="/" exact={ true } component={ LoginPage } />
                <Route path="/login" exact={ true } component={ LoginPage } />

                <Route path="/test" exact={ true } component={ TestPage } />
                <Redirect path="*" to="/login" />
            </Switch>
        </Router>
    );
}

export default Root;