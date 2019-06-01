import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Member from './components/Member'
import Calendar from './components/Calendar'
import SearchBar from './components/SearchBar'
import JanjiJanji from './components/JanjiJanji';

const borderIt = {
  border:  '1px solid #bdbdbd',
  borderRadius: '3px'
};

export default class Content extends Component {
  render() {
    return (
      <Container>
        <Row>
            <SearchBar/>
        </Row>
        <Row>
          <Col sm={8} style={borderIt}>
            <JanjiJanji />
          </Col>
          <Col sm={4} style={borderIt}>
            <Row>
              <Col>
                <Calendar/>
              </Col>  
            </Row>
            <Row>
              <Col>
                <Member/>
              </Col>
            </Row>
          </Col>
        </Row>
        <br/><br/><br/>
      </Container>
    )
  }
}