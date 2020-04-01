import React, {useEffect, useState} from "react";
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import * as Helper from 'lib/Helper';
import history from 'routes/History';
import { useDispatch, useSelector } from 'react-redux';
import GlobalAxios from 'lib/GlobalAxios';

import {
    TestPage,
    LoginPage,
    UsersPage,
    UserDetail,
    BlankPage,
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
                history.push('/login');
            }
        }
    }, [router_state])

    // TODO: 소스 정리 필요.
    useEffect(() => {
        setIsLoading(true);
        const fetchData = async () => {
            if(Helper.getRefreshToken()) {
                const refresh_token =  await GlobalAxios.refresh_token()
                if(refresh_token) {
                    dispatch(getRootDataAction());
                    // setIsLoading(false);
                } else {
                    setIsLoading(false);
                    history.push('/login');
                }
            } else {
                setIsLoading(false);
                history.push('/login');
            }
        };
        fetchData();
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
                    <Route path="/" exact={ true } component={ UsersPage } />
                    <Route path="/blank" exact={ true } component={ BlankPage } />

                    <Route path="/login" exact={ true } component={ LoginPage } />

                    <Route path="/users/:page_number" exact={ true } component={ UsersPage } />
                    <Route path="/user/:user_uuid/detail" exact={ true } component={ UserDetail } />

                    <Route path="/test" exact={ true } component={ TestPage } />
                    <Redirect path="*" to="/login" />
                </Switch>
            </Router>
        );
    }
}

export default Root;