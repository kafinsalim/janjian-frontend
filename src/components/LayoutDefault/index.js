import React, { Component } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './style.css'

export default class LayoutDefault extends Component {
    render() {
        return (
            <div>
                <Header />
                    {this.props.children}
                <Footer />
            </div>
        );
    }
}