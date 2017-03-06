import * as React from 'react';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import Layout from '../components/layouts/layout';
import CreateUser from '../components/routes/create-user';
import EditUser from '../components/routes/edit-user';

export default (
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={CreateUser} />
            <Route path="/:id" component={EditUser} />
        </Route>
    </Router>
);
