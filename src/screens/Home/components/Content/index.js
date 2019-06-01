import React, { Component } from 'react'
import {Container, Row, Col} from 'react-bootstrap'
import Member from './components/Member'
import Filter from './components/Filter'
import Calendar from './components/Calendar'
import SearchBar from './components/SearchBar'
import JanjiJanji from './components/JanjiJanji';
import './style.css'

export default class Content extends Component {
  render() {
    return (
      <Container>
        <Row>
            <SearchBar/>
        </Row>
        <Row>
          <Col md={12}>
            <JanjiJanji />
          </Col>
        </Row>
        <br/><br/><br/>
      </Container>
    )
  }
}