import React from 'react';
import ReactDOM from 'react-dom';
import './css/timeline.css';
import './css/reset.css';
import './css/login.css';
import { BrowserRouter, Switch, Route, Redirect, matchPath } from 'react-router-dom';
import Login from './componentes/Login';
import Logout from './componentes/Logout';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function verificaAutenticacao(nextState, replace) {
    const match = matchPath('/timeline', {
        path: nextState.match.url,
        exact: true
    })

    let valida = false
    if (match !== null) {
        valida = match.isExact
    }

    if (valida && localStorage.getItem('auth-token') === null) {
        return <Redirect to={{
            pathname: '/',
            state: { msg: 'Faça login para acessar esta página' }
        }} />
    }
    return <App />
}

ReactDOM.render(
    (<BrowserRouter>
        <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/timeline/:login?" render={verificaAutenticacao} />
            <Route exact path="/logout" component={Logout} />
        </Switch>
    </BrowserRouter>), document.getElementById('root'));
registerServiceWorker();
