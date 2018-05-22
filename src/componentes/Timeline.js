import React, { Component } from 'react';

export default class Timeline extends Component {

    render() {
        return (
            <div className="fotos container">
                <FotoItem />
                <FotoItem />
            </div>
        );
    }
}