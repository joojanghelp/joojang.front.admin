import React, {useEffect, useState} from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import * as Helper from 'lib/Helper';
import history from 'routes/History';
import { useDispatch, useSelector } from 'react-redux';

import {
    TestPage,
    LoginPage,
    UsersPage,
    UserDetail,
    BlankPage,
    BookCreatePage,
    BooksListPage,
    RecommendBooksListPage,
    BookActivityListPage,
    UserInfoPage,
} from 'components/pages';

import {LoadingSpinner} from 'components/elements';

import { RootState } from 'modules/redux';
import { getRootDataAction } from 'modules/redux/sitedatas';


interface RootProps  {
    Routerhistory: any
};

const Root = ({
    Routerhistory
} : RootProps) => {

    const dispatch = useDispatch();

    const router_state = useSelector((state: RootState) => state.router);
    const sitedata_state = useSelector((state: RootState) => state.sitedata.state);

    const [ isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if(!Helper.getAccessToken()) {
            if(router_state.location.pathname !== '/login') {
                history.push(process.env.PUBLIC_URL + '/login');
            }
        }
    }, [router_state])

    // TODO: 소스 정리 필요.
    useEffect(() => {
        setIsLoading(true);
        if(!Helper.getAccessToken()) {
            setIsLoading(false);
            if(router_state.location.pathname !== '/login') {
                history.push(process.env.PUBLIC_URL + '/login');
            }
        } else {
            dispatch(getRootDataAction());
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);


      useEffect(() => {
          if(sitedata_state === 'success') {
            setIsLoading(false);
          }
      }, [sitedata_state])

    if(isLoading) {
        return (
            <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center',}}>
                <LoadingSpinner />
            </div>
        );
    } else {

    return (
            <Router history={ Routerhistory }>
                <Switch>
                    <Route path={process.env.PUBLIC_URL + "/"} exact={ true } component={ UsersPage } />
                    <Route path={process.env.PUBLIC_URL + "/blank"} exact={ true } component={ BlankPage } />

                    <Route path={process.env.PUBLIC_URL + "/login"} exact={ true } component={ LoginPage } />
                    <Route path={process.env.PUBLIC_URL + "/book/create"} exact={ true } component={ BookCreatePage } />

                    <Route path={process.env.PUBLIC_URL + "/users/:page_number"} exact={ true } component={ UsersPage } />
                    <Route path={process.env.PUBLIC_URL + "/books/:page_number"} exact={ true } component={ BooksListPage } />
                    <Route path={process.env.PUBLIC_URL + "/books/activity/:gugun/:page_number"} exact={ true } component={ BookActivityListPage } />
                    <Route path={process.env.PUBLIC_URL + "/books/recommend/:gubun/:page_number"} exact={ true } component={ RecommendBooksListPage } />
                    <Route path={process.env.PUBLIC_URL + "/user/:user_uuid/detail"} exact={ true } component={ UserDetail } />
                    <Route path={process.env.PUBLIC_URL + "/user/:user_uuid/info"} exact={ true } component={ UserInfoPage } />


                    <Route path={process.env.PUBLIC_URL + "/test"} exact={ true } component={ TestPage } />
                    <Redirect path="*" to={process.env.PUBLIC_URL + "/login"} />
                </Switch>
            </Router>
        );
    }
}

export default Root;