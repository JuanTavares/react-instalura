import React, { Component } from 'react';

class FotoAtualizacoes extends Component {

    render() {
        return (
            <section className="fotoAtualizacoes">
                <a href="#" className="fotoAtualizacoes-like">Likar</a>
                <form className="fotoAtualizacoes-form">
                    <input type="text" placeholder="Adicione um comentário..." className="fotoAtualizacoes-form-campo" />
                    <input type="submit" value="Comentar!" className="fotoAtualizacoes-form-submit" />
                </form>

            </section>
        );
    }
}

class FotoInfo extends Component {

    render() {
        return (
            <div className="foto-info">
                <div className="foto-info-likes">

                    {
                        this.props.postagem.likers.map(liker => {
                            <a href="#">{liker.login},</a>
                        })
                    }

                    curtiram

              </div>

                <p className="foto-info-legenda">
                    <a className="foto-info-autor">autor </a>
                    {this.props.postagem.comentario}
                </p>

                <ul className="foto-info-comentarios">
                    {
                        this.props.postagem.comentarios.map(comentario => {
                            return (
                                <li className="comentario">
                                    <a className="foto-info-autor">{comentario.login} </a>
                                    {comentario.texto}
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}

class FotoHeader extends Component {

    render() {
        return (
            <header className="foto-header">
                <figure className="foto-usuario">
                    <img src="{this.props.postagem.urlPerfil}" alt="foto do usuario" />
                    <figcaption className="foto-usuario">

                        <a href="#">{this.props.postagem.loginUsuario}</a>

                    </figcaption>
                </figure>
                <time className="foto-data">{this.props.postagem.horario}</time>
            </header>
        );
    }
}

export default class FotoItem extends Component {

    render() {
        return (
            <div className="foto">
                <FotoHeader postagem={this.props.postagem} />
                <img alt="foto" className="foto-src" src="{this.props.postagem.urlFoto}" />
                <FotoInfo postagem={this.props.postagem} />
                <FotoAtualizacoes postagem={this.props.postagem} />
            </div>
        );
    }
}