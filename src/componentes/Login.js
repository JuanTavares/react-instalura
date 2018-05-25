import React, { Component } from 'react';

export default class Login extends Component {

    constructor() {
        super();
        this.state = { msg: '' };
    }

    envia(event) {
        event.preventDefault();

        const resquetInfo = {
            method: 'POST',
            body: JSON.stringify({ login: this.login.value, senha: this.senha.value }),
            headers: new Headers({
                'Content-type': 'application/json'
            })
        };

        fetch('https://instalura-api.herokuapp.com//api/public/login', requestInfo)
            .then(response => {
                if (response.ok) {
                    return response.text();
                } else {
                    this.setState({ msg: 'Não foi possível fazer o login' })
                }
            })
            .then(token => {
                console.log(token);
            })
    }

    render() {

        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <form onSubmit={this.envia.bind(this)}>
                    <span>{this.state.msg}</span>
                    <input type="text" ref={(input) => this.login = input} />
                    <input type="password" ref={(input) => this.senha = input} />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}