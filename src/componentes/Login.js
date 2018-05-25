import React, { Component } from 'react';

export default class Login extends Component {

    envia() {
        event.preventDefault();
        
    }

    render() {

        return (
            <div className="login-box">
                <h1 className="header-logo">Instalura</h1>
                <form onSubmit={this.envia}>
                    <input type="text" ref={(input) => this.login = input}/>
                    <input type="password" ref={(input) => this.senha = input}/>
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}