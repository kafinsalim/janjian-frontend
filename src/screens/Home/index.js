import React, { Component } from 'react';
import Content from './components/Content';
import LayoutDefault from './../../components/LayoutDefault'


class Home extends Component {
    render() {
        return (
            <LayoutDefault>
                <Content />                
            </LayoutDefault>
        );
    }
}
                
export default Home;