import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import * as actions from '../../../store/actions/adminAction';
import DatePicker from '../../../components/Input/DatePicker';
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
            this.setState({
                scheduleTime: this.props.allschedule
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
    saveSchedule = () => {
        console.log('Saving schedule state', this.state)
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
                                return (
                                    <button key={i} className="">{item.valueEn}</button>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="container">
                    <button className="btn-save"
                        onClick={this.saveSchedule}
                    >Lưu thông tin</button>
                </div>
            </Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        allDoctors: state.admin.allDoctors,
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
