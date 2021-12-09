import React, { Component } from 'react'
import { Modal, ModalBody, ModalHeader } from 'reactstrap';
import './BookingModal.scss';
import ProfileDoctor from '../ProfileDoctor';
import DatePicker from '../../../../components/Input/DatePicker';
import { saveBookingService } from '../../../../services/userService';
import { toast } from 'react-toastify';
class BookingModal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataProfile: {},

            fullName: '',
            email: '',
            phoneNumber: '',
            address: '',
            reason: '',
            birthday: '',
            gender: '',
            doctorId: '',
            date: '',
            timeType: '',
        }
    }

    async componentDidMount() {


    }
    async componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.doctorId !== this.props.doctorId) {
            this.setState({
                doctorId: this.props.doctorId,
            })
        }
        if (prevProps.dataSchedule !== this.props.dataSchedule) {
            let { timeType, date } = this.props.dataSchedule
            this.setState({
                timeType: timeType,
                date: date,
            })
            // console.log('check data schedule in booking modal ', this.props.dataSchedule)
        }
    }
    handleChangeInput = (event, id) => {
        let inputValue = event.target.value;
        let stateCopy = { ...this.state };
        stateCopy[id] = inputValue;
        this.setState({
            ...stateCopy
        });
    }
    handleOnChangeDatePicker = (date) => {
        this.setState({
            birthday: date[0]
        })
    }
    saveBookingModal = async () => {
        console.log('when submit check state', this.state)
        let res = await saveBookingService({
            fullName: this.state.fullName,
            email: this.state.email,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            reason: this.state.reason,
            birthday: this.state.birthday,
            gender: this.state.gender,
            doctorId: this.state.doctorId,
            date: this.state.date,
            timeType: this.state.timeType,
        })

        if (res && res.errCode === 0) {

            toast.success('booking success')
            this.props.closeBookingModal()
        }
    }

    render() {
        let { isBookingModal, closeBookingModal, dataSchedule, doctorId } = this.props;
        // console.log('is booking madol in bookingmodal:', isBookingModal);
        // console.log('props in booking modal ', this.props)
        // console.log('data in bookingmodal:', dataSchedule);
        // console.log('state in model booking', this.state)
        return (
            <div>
                <Modal
                    isOpen={isBookingModal}
                    className={"booking-modal container"}
                    size="lg"
                >
                    <div className="booking-modal-header">
                        <h4>Thông tin đặt lịch khám bệnh</h4>
                        <i class="fas fa-times"
                            onClick={closeBookingModal}
                        ></i>

                    </div>
                    <ProfileDoctor
                        doctorId={doctorId}
                        dataSchedule={dataSchedule}
                        showDescription={false}
                    />
                    <div className="modal-body booking-modal-body">
                        {/* <h5>Giá khám bệnh  <span></span>  </h5> */}
                        <div className="row">
                            <div className="col">
                                <label className="">Họ và tên</label>
                                <input type="text" className="form-control"
                                    value={this.state.fullName}
                                    onChange={(event) => this.handleChangeInput(event, 'fullName')}
                                />
                            </div>
                            <div className="col">
                                <label className="">Số điện thoại</label>
                                <input type="text" className="form-control"
                                    value={this.state.phoneNumber}
                                    onChange={(event) => this.handleChangeInput(event, 'phoneNumber')}
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label className="">Địa chỉ E-mail</label>
                                <input type="text" className="form-control"
                                    value={this.state.email}
                                    onChange={(event) => this.handleChangeInput(event, 'email')}
                                />
                            </div>
                            <div className="col">
                                <label className="">Địa chỉ liên hệ </label>
                                <input type="text" className="form-control"
                                    value={this.state.address}
                                    onChange={(event) => this.handleChangeInput(event, 'address')}
                                />
                            </div>
                        </div>
                        <div className="form-group">
                            <label htmlFor="inputAddress">Lý do khám bệnh</label>
                            <input type="text" className="form-control" id="inputAddress"
                                value={this.state.reason}
                                onChange={(event) => this.handleChangeInput(event, 'reason')}
                            />
                        </div>

                        <div className="row">
                            <div className="col">
                                <label className="">Ngày sinh</label>
                                <DatePicker
                                    onChange={this.handleOnChangeDatePicker}
                                    value={this.state.birthday}
                                    className={"form-control"}
                                />
                            </div>
                            <div className="col">
                                <label className="">Giới tính</label>
                                <select id="inputState" className="form-control"
                                    onChange={(event) => this.handleChangeInput(event, 'gender')}
                                    value={this.state.gender}
                                >
                                    <option selected>Choose...</option>
                                    <option value="M" >Nam</option>
                                    <option value="F" >Nữ</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="modal-footer booking-modal-footer">
                        <button className="btn btn-primary"
                            onClick={() => this.saveBookingModal()}
                        >Xác nhận </button>
                        <button className="btn btn-danger"
                            onClick={closeBookingModal}
                        >Cancel </button>
                    </div>
                </Modal>
            </div>
        )
    }
}

export default BookingModal
