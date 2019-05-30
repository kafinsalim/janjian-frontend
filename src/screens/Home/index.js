import React, { Component } from 'react';
import Content from './components/Content';
import Wellcome from './components/Wellcome';
import LayoutDefault from './../../components/LayoutDefault'

class Home extends Component {
    render() {
        return (
            <LayoutDefault>
                <Wellcome />
                <Content />
            </LayoutDefault>
        );
    }
}
                
export default Home;