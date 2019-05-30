import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Member from './components/Member'
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
          <Col sm={8} style={borderIt}>
            <JanjiJanji />
          </Col>
          <Col sm={4} style={borderIt}>
            <Member />
          </Col>
        </Row>
        <br/><br/><br/>
      </Container>
    )
  }
}