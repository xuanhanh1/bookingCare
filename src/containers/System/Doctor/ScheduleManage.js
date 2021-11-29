import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import { dateFormat } from '../../../utils';
import * as actions from '../../../store/actions/adminAction';
import DatePicker from '../../../components/Input/DatePicker';
import { toast } from 'react-toastify';
import _ from 'lodash';
import moment from 'moment';
import './ScheduleManage.scss'

class ScheduleManage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedOption: '',
            listDoctors: [],
            currentDate: new Date(),
            scheduleTime: [],
        }
    }

    componentDidMount() {
        this.props.getAllDoctor();
        this.props.getScheduleHour();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            // console.log(this.props.allDoctors)
            let dataInput = this.inputSeclectData(this.props.allDoctors)
            // console.log(dataInput)
            this.setState({
                listDoctors: dataInput
            })
        }
        if (prevProps.allschedule !== this.props.allschedule) {
            // console.log(this.props.allschedule)
            let data = this.props.allschedule;
            if (data && data.length > 0) {
                data = data.map(item => ({ ...item, isSelected: false }))
            }
            this.setState({
                scheduleTime: data
            })
        }
    }
    inputSeclectData = (inputData) => {
        let result = [];
        if (inputData) {
            inputData.map((item, key) => {
                let object = {};
                let labelName = `${item.firstName} ${item.lastName}`;
                object.label = labelName;
                object.value = item.id;
                result.push(object);
            })
        }
        return result;
    }
    handleChange = async (selectedOption) => {
        this.setState({
            selectedOption: selectedOption,
        });

    };
    handleOnChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        })
    }
    onHandleClickBtnTime = (time) => {
        let { scheduleTime } = this.state;
        if (scheduleTime && scheduleTime.length > 0) {
            scheduleTime = scheduleTime.map(item => {
                if (item.id === time.id) item.isSelected = !item.isSelected;
                return item;

            })
            this.setState({
                scheduleTime: scheduleTime
            })
        }
    }
    saveSchedule = () => {
        // console.log('Saving schedule state', this.state)
        let { scheduleTime, currentDate, selectedOption } = this.state
        let result = [];
        if (!currentDate) {
            toast.error("not time date")
        }
        if (selectedOption && _.isEmpty(selectedOption)) {
            toast.error("not chose doctor")
        }
        let formatedDate = moment(currentDate).format(dateFormat.SEND_TO_SERVER);

        if (scheduleTime && scheduleTime.length > 0) {
            let selectTime = scheduleTime.filter(item => item.isSelected === true)

            if (selectTime && selectTime.length > 0) {
                selectTime.map((item, i) => {
                    let object = {};
                    object.id = selectedOption.value;
                    object.date = formatedDate;
                    object.time = item.keyMap;
                    result.push(object);
                })

            } else {
                toast.error("not select time ");
                return;
            }
        }
        console.log('luu thong tin schedule time', result)
    }

    render() {
        let { scheduleTime } = this.state;
        let { allschedule } = this.props;
        // console.log(scheduleTime)
        // console.log(allschedule.valueEn)
        return (
            <Fragment>
                <div className="select container">
                    <div className="select-doctor">
                        <label className="">Chọn bác sỹ</label>
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={this.state.listDoctors}
                        />
                    </div>
                    <div className="select-data">
                        <label>Chọn ngày</label>

                        <DatePicker
                            onChange={this.handleOnChangeDatePicker}
                            value={this.state.currentDate}
                            minDate={new Date()}
                        />

                    </div>
                </div>
                <div className="schedule container">
                    <div className="schedule-time">
                        {scheduleTime && scheduleTime.length > 0 &&
                            scheduleTime.map((item, i) => {
                                // console.log(item)
                                return (
                                    <button key={i} className={item.isSelected === true ? 'active' : ''}
                                        onClick={() => this.onHandleClickBtnTime(item)}
                                    >{item.valueEn}</button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="container">
                    <button className="btn-save"
                        onClick={() => this.saveSchedule()}
                    >Lưu thông tin</button>
                </div>
            </Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        allDoctors: state.admin.allDoctors,
        isLoggedIn: state.user.isLoggedIn,
        allschedule: state.admin.schedule,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctor: () => dispatch(actions.getAllDoctor()),
        getScheduleHour: () => dispatch(actions.getScheduleHour()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ScheduleManage);