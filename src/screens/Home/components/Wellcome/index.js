import React, { Component } from 'react'
import './style.css';

export class index extends Component {
    render() {
        return (
            <div className="wrapper-wellcome">
                <h1>
                    <span className="highlight-janjian">Janjian</span>
                </h1>
                <span className="detail-janjian"> a place to collaborate ideas.</span>
            </div>
        )
    }
}

export default index
