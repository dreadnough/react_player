import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App/App';
import About from './components/About/index';
import NotFound from './components/NotFound/index';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/react_player/" component={App} />
        <Route path="/react_player/about" component={About} />
        <Route path="*" component={NotFound} />
    </Router>
)

export default Routes