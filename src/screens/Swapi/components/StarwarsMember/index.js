import React, { Component } from 'react'
import { Table } from 'react-bootstrap'
import SweetAlert from 'sweetalert2-react';
import './style.css'

class StarwarsMember extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            key: 0
        };
    }

  render() {
    return (
      <div style={{padding: "25px 50px"}}>
        <div className="flex-row">
          <h2>{this.props.title}</h2>
          <h4 style={{verticalAlign : "bottom"}}>See all</h4>
        </div>
        <Table bordered hover>
            <thead>
                <tr>
                    <th style={{width: "10%"}}>#</th>
                    <th>Name</th>
                    <th>Gender</th>
                    <th>Height</th>
                    <th>Home World</th>
                </tr>
            </thead>
            <tbody>
                { this.props.starwars.length ? 
                this.props.starwars.map((data, nomor) => {
                return (
                    <tr key={nomor} onClick={()=> this.setState({show: true, key: nomor})}>
                        <td>{nomor + 1}</td>
                        <td>{data.name}</td>
                        <td>{data.gender}</td>
                        <td>{data.height}</td>
                        <td>{data.homeworld}</td>
                    </tr>)
                    })
                    : (
                    <tr>
                        <td colSpan="5">Loading...</td>
                    </tr>
                )
                }
            </tbody>
        </Table>
        <SweetAlert
            show={this.state.show}
            title="You clicked"
            text={JSON.stringify(this.props.starwars[this.state.key])}
            onConfirm={() => this.setState({ show: false })}
        />
      </div>
    );
  }
}

export default StarwarsMember;