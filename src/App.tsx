import * as React from 'react';
import { Provider } from 'react-redux';
import History from './routes/History';
import { createBrowserHistory } from 'history'
import configureStore from 'modules/configureStore'

import Root from './routes/Root';

const history = createBrowserHistory();

declare var window: any;
const store = configureStore(history, window.INITIAL_REDUX_STATE);

const App = () => {
    return (
        <Provider store={ store }>
            <Root Routerhistory={ History }/>
        </Provider>
    );
}

export default App;