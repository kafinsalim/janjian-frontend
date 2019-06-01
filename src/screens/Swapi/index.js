import React, { Component } from 'react';
import LayoutDefault from './../../components/LayoutDefault'
import StarwarsMember from './components/StarwarsMember'
import { connect } from 'react-redux';
import actions from '../../actions';
import axios from 'axios';

class Index extends Component {
    constructor(props) {
        super(props);
        this.checkInterval = null;
        this.getDataFromSwapi = this.getDataFromSwapi.bind(this);
    }

    getDataFromSwapi() {
        this.props.fetchSwapiAPI(null,
            (res) => {
                console.log(res);
            },
            (err) => {
                console.log(err);
            }
        )
    }
    
    componentDidMount() {
        this.getDataFromSwapi();
    }

    componentWillUnmount() {
        clearInterval(this.checkInterval);
    }

    render() {
        return (
            <LayoutDefault>
                <StarwarsMember title="Starwars Members" starwars={this.props.starwars} />
            </LayoutDefault>
        );
    }
}

const mapStateToProps = (state) => ({
    starwars: state.swapi.starwars
});

const mapDispatchToProps = (dispatch) => ({
    fetchSwapiAPI: (req,res,err) => dispatch(actions.swapi.api.fetchSwapiAPI(req,res,err))
});

export default connect(mapStateToProps,mapDispatchToProps)(Index);