import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import store from './stores';
import Layout from './components/layout';

const render = () => {
   return ReactDOM.render(
        <Provider store={store}>
            <Layout />
        </Provider>,
        document.getElementById('root')
    );
};

render();
store.subscribe(render);
