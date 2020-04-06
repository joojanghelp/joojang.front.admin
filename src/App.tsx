import * as React from 'react';
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';
import History from './routes/History';
import { createBrowserHistory } from 'history'
import configureStore from 'modules/configureStore'

import Root from './routes/Root';

import "assets/css/sb-admin-2.css";


const history = createBrowserHistory();

declare var window: any;
const store = configureStore(history, window.INITIAL_REDUX_STATE);

const App = () => {
    return (
        <Provider store={ store }>
            <BrowserRouter basename={process.env.PUBLIC_URL}>
                <Root Routerhistory={ History }/>
            </BrowserRouter>
        </Provider>
    );
}

export default App;