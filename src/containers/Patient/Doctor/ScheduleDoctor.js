import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/adminAction';
import Navbar from '../../HomePage/HeaderHome/Navbar'
import './DetailDoctor.scss'
import './ScheduleDoctor.scss'
import moment from 'moment';
import localization from 'moment/locale/vi';
import { getScheduleDoctorByDate } from '../../../services/userService'

class ScheduleDoctor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            allDays: [],
            allAvailabeTimes: [],
        }
    }

    async componentDidMount() {
        let allDays = this.getAllDays()
        // console.log('all day ', allDays);
        this.setState({
            allDays: allDays
        });

    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    getAllDays() {
        let allDays = [];
        //thêm 7 ngày kể từ hôm nay
        for (let i = 0; i < 7; i++) {
            let object = {};
            if (i === 0) {
                let DDMM = moment(new Date()).format('DD/MM');
                object.label = 'Hôm nay - ' + DDMM;
            } else {
                let lableUp = moment(new Date()).add(i, 'days').format('dddd - DD/MM');
                object.label = this.capitalizeFirstLetter(lableUp);
            }
            object.value = moment(new Date()).add(i, 'days').startOf('day').valueOf()
            allDays.push(object);
        }
        return allDays;
    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.doctorId !== this.props.doctorId) {
            let allDays = this.getAllDays();
            let res = await getScheduleDoctorByDate(this.props.doctorId, allDays[0].value);
            this.setState({
                allAvailabeTimes: res.data ? res.data : [],
            })
        }
    }
    handleOnChangeSlect = async (event) => {
        if (this.props.doctorId) {
            let doctorId = this.props.doctorId;
            let date = event.target.value;
            let res = await getScheduleDoctorByDate(doctorId, date);
            let allTime = [];
            if (res && res.errCode === 0) {
                allTime = res.data;

                this.setState({
                    allAvailabeTimes: allTime ? allTime : [],
                })
            }
            // console.log('check get schedule doctor ', res);
        }
    }

    render() {


        let { allDays, allAvailabeTimes } = this.state;
        console.log('check all available time', allAvailabeTimes);
        return (
            <div className="doctor-schedule container">
                <div className="schedule-left">
                    <select onChange={(event) => this.handleOnChangeSlect(event)}>
                        {allDays.map((item, index) => {
                            return (
                                <option
                                    key={index}
                                    value={item.value}
                                >
                                    {item.label}
                                </option>
                            )
                        })}


                    </select>
                    <br></br>
                    <br></br>
                    <h2>  <i class="far fa-calendar-alt"></i>Lịch khám bệnh</h2>

                    <div className="calendar">
                        {allAvailabeTimes && allAvailabeTimes.length > 0 &&
                            allAvailabeTimes.map((item, index) => {
                                return (
                                    <button
                                        key={index}
                                    >{item.timeTypeData.valueVi}</button>
                                )
                            })}

                    </div>
                    {allAvailabeTimes && allAvailabeTimes.length > 0
                        ? <span>Đặt lịch tại đây <i class="fas fa-hand-point-up"></i> </span>
                        : <span>Không có lịch khám bệnh vào hôm nay </span>
                    }
                </div>
                <div className="schedule-right">

                </div>
                <div style={{ height: '80px' }}></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleDoctor);
