import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/adminAction';
import Navbar from '../../HomePage/HeaderHome/Navbar'
import './DetailDoctor.scss'
import ScheduleDoctor from './ScheduleDoctor'
import { getAInfoDoctorService } from '../../../services/userService'

class DetailDoctor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            detailDoctor: {},
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let res = await getAInfoDoctorService(id);
            this.setState({
                detailDoctor: res.data,
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    getImage = (a) => {


    }

    render() {

        let data = this.state.detailDoctor;
        // console.log(data);
        // console.log("check data render :", data)
        // console.log("check state render:", this.state.dataDoctor)
        let title = ''
        let imageBase64 = ''
        let description = ''
        let post = ''
        if (data && data.positionData && data.firstName && data.lastName) {
            title = `${data.positionData.valueVi}, ${data.firstName} ${data.lastName}`
        }
        if (data && data.image) {
            imageBase64 = new Buffer(data.image, 'base64').toString('binary')
        }
        if (data && data.Markdown) {
            description = data.Markdown.description
            post = data.Markdown.contentHTML
        }
        return (
            <div className="">
                <Navbar />

                <div className="doctor ">
                    <div className="doctor-header container">
                        <div className="doctor-header-img">
                            <img src={imageBase64}></img>
                        </div>
                        <div className="doctor-header-content">
                            <h2>Giao su tien si <span>{title}</span></h2>
                            <p> {description} </p>
                        </div>
                    </div>

                    <ScheduleDoctor
                        doctorId={data.id}
                    />


                    <div className="doctor-content">
                        <div className="container" dangerouslySetInnerHTML={{ __html: post }}>

                        </div>
                    </div>
                </div>
                <div style={{ height: '100px' }}></div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctor: () => dispatch(actions.getAllDoctor()),


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DetailDoctor);
