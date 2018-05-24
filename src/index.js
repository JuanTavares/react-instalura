import React from 'react';
import ReactDOM from 'react-dom';
import './css/timeline.css';
import './css/reset.css';
import './css/login.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './componentes/Login';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/timeline" component={App} />
            </Switch>
        </BrowserRouter>
    )
    , document.getElementById('root'));
registerServiceWorker();
