import React, { Component } from 'react';
import './styles.css';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import images from '../../../../assets';
import { connect } from 'react-redux';

class Header extends Component {
    
    render() {        
        return (
            // <Navbar bg='light' expand='lg' className="main-header">
            <Navbar>
                im in the navbar
                
            </Navbar>
        );
    }
}

const mapStateToProps = (state) => ({
    user: state.user
})

export default connect(mapStateToProps,null)(Header);