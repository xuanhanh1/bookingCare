import React, { Component, Fragment } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
import { dateFormat } from '../../../utils';
import * as actions from '../../../store/actions/adminAction';
import DatePicker from '../../../components/Input/DatePicker';
import { toast } from 'react-toastify';
import { getListPatientService } from '../../../services/userService'
import _ from 'lodash';
import moment from 'moment';
import './PantentManage.scss'
import './ScheduleManage.scss'

class PantentManage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            currentDate: moment(new Date()).startOf('day').valueOf(),
            dataPatient: {},
        }
    }

    async componentDidMount() {
        let { users } = this.props;
        // console.log('tuser in paitent', users);
        let id = users.id;
        let { currentDate } = this.state;
        let dateType = new Date(currentDate).getTime();
        let res = await getListPatientService({
            doctorId: id,
            date: dateType
        })
        if (res && res.errCode === 0) {
            this.setState({
                dataPatient: res.data
            })
        }
        console.log('state', this.state)

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    handleOnChangeDatePicker = (date) => {
        this.setState({
            currentDate: date[0]
        })
    }


    render() {
        return (
            <Fragment>
                <h3 className="mt-3">
                    QUẢN LÝ BỆNH NHÂN KHÁM BỆNH
                </h3>
                <div className="pantent container">
                    <div className="select-data">
                        <label>Chọn ngày</label>

                        <DatePicker
                            onChange={this.handleOnChangeDatePicker}
                            value={this.state.currentDate}
                        />

                    </div>
                </div>
                <div className="container">
                </div>
            </Fragment>
        )
    }

}

const mapStateToProps = state => {
    return {
        users: state.user.userInfo
    };
};

const mapDispatchToProps = dispatch => {
    return {
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(PantentManage);
