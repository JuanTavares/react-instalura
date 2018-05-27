import React, { Component } from 'react';
import FotoItem from './FotoItem';

export default class Timeline extends Component {

    constructor() {
        super();
        this.state = {lista:[]}
    }
    componentDidMount() {
        fetch('https://instalura-api.herokuapp.com//api/public/fotos/rafael')
        .then(Response => Response.json())
        .then(fotos => {
            this.setState({lista: fotos});
        });
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