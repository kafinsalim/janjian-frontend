import React, { Component } from 'react';
import Content from './components/Content';
import Wellcome from './components/Wellcome';
import JanjiJanji from './components/JanjiJanji';
import LayoutDefault from './../../components/LayoutDefault'


class Home extends Component {
    render() {
        return (
            <LayoutDefault>
                <Wellcome />
                <JanjiJanji />
                <Content />
            </LayoutDefault>
        );
    }
}
                
export default Home;