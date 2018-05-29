import React from 'react';
import ReactDOM from 'react-dom';
import './css/timeline.css';
import './css/reset.css';
import './css/login.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './componentes/Login';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

function isLoggedIn() {
    return localStorage.getItem('auth-token') === null;
}

ReactDOM.render(
    (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/timeline" render={() => (
                    isLoggedIn() ? (
                        <Redirect to="/?msg=Você precisa estar logado para acessar o endereço" />
                    ) : (
                            <App />
                        )
                )} />
            </Switch>
        </BrowserRouter>
    )
    , document.getElementById('root'));
registerServiceWorker();
