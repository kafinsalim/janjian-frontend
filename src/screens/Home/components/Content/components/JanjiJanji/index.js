import React, { Component } from 'react'
import './style.css'

function Janji(props){
    return(
            <div className="item-janji">
                <h4>
                    {props.title}
                </h4>
                <p>
                    {props.content}
                </p>
                <h6 style={{textAlign: "right", color: 'grey'}}>
                    {props.location}
                </h6>
            </div>
        );
}

export class index extends Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className="wrapper-janji">
                <Janji
                    title="Diskusi Framework Javascript 2018"
                    content="ya mari kita diskusi framework yang tidack akan pernah selesai"
                    location="Jakarta, Campus Hacktiv8" />
                <Janji
                    title="Diskusi Framework Javascript 2019"
                    content="ya ya mari kita diskusi framework yang tidack akan pernah selesai"
                    location="Jakarta, Campus Hacktiv8 2" />
                <Janji
                    title="Diskusi Framework Javascript 2020"
                    content="ya ya ya mari kita diskusi framework yang tidack akan pernah selesai"
                    location="Jakarta, Campus Hacktiv8 3" />
            </div>
        )
    }
}

export default index
