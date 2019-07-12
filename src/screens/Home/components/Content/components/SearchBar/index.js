import React, { Component } from 'react'
import { Form, FormControl, Button } from 'react-bootstrap'
import './style.css'

export class index extends Component {
    render() {
        return (
            <div className="wrapper-searchbar">
                <Form inline>
                    <div className="col-md-10" style={{margin: '10px auto'}}>
                        <FormControl type="text" placeholder="Cari Janjian" className="mr-sm-3" style={{width: '100%'}}/>
                    </div>
                    <div className="col-md-2" style={{margin: '10px auto'}}>
                        <Button variant="outline-success" style={{width: '100%'}}>Cari</Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default index
