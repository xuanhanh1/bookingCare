import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/adminAction';
import Navbar from '../../HomePage/HeaderHome/Navbar';
import ScheduleDoctor from '../Doctor/ScheduleDoctor';
import ExtraInforDoctor from '../Doctor/ExtraInforDoctor';
import ProfileDoctor from '../Doctor/ProfileDoctor'
import { getClinicByIdService } from '../../../services/userService'
import './DetailClinic.scss';

class DetailClinic extends Component {

    constructor(props) {
        super(props);

        this.state = {
            // arrSpectialty: [59, 60],
            arrClinic: {},
            arrClinicId: [],
            isMore: true,
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            // console.log('id in doctor detail', id);
            let res = await getClinicByIdService({
                id: id,
            });
            // console.log('get a info doctor service', res);
            this.setState({
                arrClinic: res.data,
                arrClinicId: res.data.doctorClinic
            })
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {

    }


    render() {
        let { arrClinicId, arrClinic, isMore } = this.state
        console.log('id specialty in detail specialty', this.state)
        return (
            <div className="specialty">
                <div className=" container ">

                    <Navbar />
                    <div className="description">
                        {arrClinic && arrClinic.length > 0 &&
                            arrClinic.descriptionHTML
                            ? arrClinic.descriptionHTML :
                            <div className="container" dangerouslySetInnerHTML={{
                                __html: arrClinic.descriptionHTML
                            }}>
                            </div>
                        }
                    </div>


                    {arrClinicId && arrClinicId.length > 0 &&
                        arrClinicId.map((item, index) => {
                            return (
                                <div className="sp">
                                    <div className="sp-left">

                                        <ProfileDoctor
                                            doctorId={item.doctorId}
                                            // dataSchedule={dataSchedule}
                                            showDescription={true}
                                            isMore={isMore}
                                        />
                                    </div>
                                    <div className="sp-right">
                                        <div className="sp-right-up">
                                            <ScheduleDoctor
                                                doctorId={item.doctorId}
                                            />
                                        </div>
                                        <div className="sp-right-down">
                                            <ExtraInforDoctor
                                                doctorId={item.doctorId}
                                            />
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }




                    <div style={{ height: '10px' }}></div>
                </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(DetailClinic);
