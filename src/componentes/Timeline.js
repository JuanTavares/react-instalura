import React, { Component } from 'react';
import FotoItem from './FotoItem';

export default class Timeline extends Component {

    constructor(props) {
        super(props);
        this.state = {lista:[]}
    }
    componentDidMount() {
        let urlPerfil;
        if(this.props.login === undefined){
            urlPerfil = `https://instalura-api.herokuapp.com//api/fotos?X-AUTH-TOKEN=${localStorage.getItem('auth-token')}` 
        } else {
            urlPerfil = `https://instalura-api.herokuapp.com//api/public/fotos/${this.props.login}`;
        }
        fetch(urlPerfil)
        .then(Response => Response.json())
        .then(fotos => {
            this.setState({lista: fotos});
        });
        console.log(this);
    }

    render() {
        return (
            <div className="fotos container">
            
            {
                this.state.lista.map(foto => <FotoItem key={foto.id} postagem = {foto}/>)
            }

            </div>
        );
    }
}