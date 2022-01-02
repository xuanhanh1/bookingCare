import React, { Component } from 'react'
import './ListNavBar.scss';
import * as actions from '../../../../store/actions/adminAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Navbar from '../Navbar'

class Doctor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            listDoctors: [],
        }
    }

    componentDidMount() {
        this.props.getAllDoctor();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            this.setState({
                listDoctors: this.props.allDoctors
            })
        }

    }
    handerViewDetailDoctor = (doctor) => {
        // console.log(doctor)
        this.props.history.push(`/doctorDetail/${doctor}`)

    }
    render() {
        let listDoctors = this.state.listDoctors;
        console.log("all doctor ne: ", listDoctors)
        return (
            <>
            </>
        )
    }
}

const mapStateToProps = state => {
    return {
        allDoctors: state.admin.allDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctor: () => dispatch(actions.getAllDoctor()),
    };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Doctor));