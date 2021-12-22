import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/adminAction';
import './ManageDoctor.scss'
import { getAInfoDoctorService } from '../../../services/userService';
import { CRUD_ACTION } from '../../../utils/constant';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            description: '',
            selectedOption: '',
            listDoctors: [],

            listPrice: [],
            listPayment: [],
            listProvince: [],
            listSpecialty: [],
            listClinic: [],
            selectClinic: '',
            selectSpecialty: '',
            selectPrice: '',
            selectPayment: '',
            selectProvince: '',
            nameClinic: '',
            addressClinic: '',
            note: '',

            action: CRUD_ACTION.CREATE,
        }
    }

    componentDidMount() {
        this.props.getAllDoctor();
        this.props.getProvince();
        this.props.getPrice();
        this.props.getPayment();
        this.props.getSpecialty();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataInput = this.inputSeclectData(this.props.allDoctors)
            // console.log(dataInput)
            this.setState({
                listDoctors: dataInput
            })
        }
        if (prevProps.price !== this.props.price) {
            let dataInput = this.inputInforData(this.props.price)
            // console.log('input data format', dataInput)s
            this.setState({
                listPrice: dataInput
            })

        }
        if (prevProps.payment !== this.props.payment) {
            let dataInput = this.inputInforData(this.props.payment)
            // console.log('input data format', dataInput)
            this.setState({
                listPayment: dataInput
            })

        }
        if (prevProps.province !== this.props.province) {
            let dataInput = this.inputInforData(this.props.province)
            // console.log('input data format', dataInput)
            this.setState({
                listProvince: dataInput
            })

        }
        //get specialty
        if (prevProps.specialty !== this.props.specialty) {
            let dataInput = this.inputInforDataSpecialty(this.props.specialty)
            // console.log('input data format', dataInput)
            this.setState({
                listSpecialty: dataInput
            })

        }
    }
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html
        });

    }
    handleChange = async (selectedOption) => {
        // console.log(selectedOption)
        this.setState({
            selectedOption: selectedOption,
        });
        // console.log(selectedOption)
        let res = await getAInfoDoctorService(selectedOption.value);
        // console.log(res)
        if (res && res.errCode === 0 && res.data && res.data.Markdown) {
            this.setState({
                contentMarkdown: res.data.Markdown.contentMarkdown,
                contentHTML: res.data.Markdown.contentHTML,
                description: res.data.Markdown.description,
            })
        } else {
            this.setState({
                contentMarkdown: '',
                contentHTML: '',
                description: '',
            })
        }

    };
    handleChangeInfor = (selectOption, name) => {
        console.log('selected option value:', selectOption, name);
        let stateName = name.name;
        // console.log(stateName);
        let stateCopy = { ...this.state };
        stateCopy[stateName] = selectOption
        this.setState({
            // 
            ...stateCopy,
        })

    }
    onChangeInput = (event) => {
        let description = event.target.value;
        let name = event.target.name
        // console.log(description);
        this.setState({
            [name]: description
        });
        // console.log('set state input ', this.state)
    }
    onChangeTextArea = (event) => {
        let description = event.target.value;
        // console.log(description);
        this.setState({
            description: description
        });
        // console.log('set state input ', this.state)
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
    inputInforData = (inputData) => {
        let result = [];
        // console.log('input data begin', inputData)
        if (inputData) {
            inputData.map((item, key) => {
                let object = {};
                object.value = item.keyMap;
                object.label = item.valueVi;
                result.push(object);
            })
        }
        return result;
    }
    //get inputInforDataSpecialty
    inputInforDataSpecialty = (inputData) => {
        let result = [];
        // console.log('input data begin', inputData)
        if (inputData) {
            inputData.map((item, key) => {
                let object = {};
                object.value = item.id;
                object.label = item.name;
                result.push(object);
            })
        }
        return result;
    }
    handleSaveDoctor = () => {
        console.log(this.state.selectSpecialty.value)
        this.props.createInfoDoctor({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedOption.value,

            selectedPrice: this.state.selectPrice.value,
            selectedPayment: this.state.selectPayment.value,
            selectedProvince: this.state.selectProvince.value,
            nameClinic: this.state.nameClinic,
            addressClinic: this.state.addressClinic,
            specialtyId: this.state.selectSpecialty.value,
            note: this.state.note,
            action: this.state.action,
        })

        this.setState({
            contentHTML: '',
            contentMarkdown: '',
            description: '',
            // doctorId: ,
            selectedOption: '',
            selectPrice: '',
            selectPayment: '',
            selectProvince: '',
            nameClinic: '',
            addressClinic: '',
            note: '',
        })
    }


    render() {
        let { selectedOption, listDoctors, listProvince, listPrice,
            listPayment, selectPayment, selectPrice, selectProvince,
            listSpecialty, selectSpecialty, contentMarkdown
        } = this.state;
        console.log('state contentMarkdown', selectSpecialty)
        // console.log('state listDoctors', this.state.listDoctors)
        // console.log('state selectedOption', this.state.selectedOption)
        // console.log(this.state)
        let { province, price, payment, specialty } = this.props
        // console.log('price', specialty)
        // console.log('province', listProvince)
        // console.log('payment', payment)
        return (
            <div className="container">
                <h3 className="mt-3">
                    THÊM THÔNG TIN BÁC SĨ
                </h3>

                <div className="manage-doctor">
                    <div className="manage-doctor-select">
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={this.state.listDoctors}
                            placeholder={'Chọn bác sĩ'}
                        />
                    </div>
                    <div className="manage-doctor-textarea ">
                        <textarea
                            className="form-control"
                            value={this.state.description}
                            onChange={this.onChangeTextArea}
                        ></textarea>
                    </div>
                </div>
                <div className="manage-doctors">
                    <div className="manage-doctors-1">
                        <label>Chọn giá</label> <br />
                        <Select name="selectPrice" id=""
                            value={selectPrice}
                            onChange={this.handleChangeInfor}
                            options={listPrice}
                            placeholder={'Giá khám bệnh'}
                        >

                        </Select>
                    </div>
                    <div className="manage-doctors-2">
                        <label>Chọn phương thức thanh toán </label><br />
                        <Select name="selectPayment" id=""
                            value={selectPayment}
                            onChange={this.handleChangeInfor}
                            options={listPayment}
                            placeholder={'Chọn phương thức thanh toán'}>

                        </Select>
                    </div>
                    <div className="manage-doctors-3">
                        <label>Chọn tỉnh thành</label><br />
                        <Select name="selectProvince" id="" value={selectProvince}
                            onChange={this.handleChangeInfor}
                            options={listProvince}
                            placeholder={'Chọn tỉnh thành phố'}>

                        </Select>
                    </div>


                    <div className="manage-doctors-4">
                        <label>Tên phòng khám </label><br />
                        <input name="nameClinic" onChange={this.onChangeInput}
                            value={this.state.nameClinic}
                            className="form-control"
                        ></input>
                    </div>
                    <div className="manage-doctors-5">
                        <label>Địa chỉ phòng khám</label><br />
                        <input name="addressClinic" onChange={this.onChangeInput}
                            value={this.state.addressClinic}
                            className="form-control"
                        ></input>
                    </div>
                    <div className="manage-doctors-6 ">
                        <label>Note</label><br />
                        <input name="note" onChange={this.onChangeInput}
                            value={this.state.note}
                            className="form-control"
                        ></input>
                    </div>

                    {/* specitial  */}
                    <div className="manage-doctors-7">
                        <label>Chọn địa chỉ </label><br />
                        <Select name="selectProvince" id=""
                            // value={selectSpecialty}
                            // onChange={selectProvince}
                            // options={listProvince}
                            placeholder={'Chọn địa chỉ'}>

                        </Select>
                    </div>
                    <div className="manage-doctors-8">
                        <label>Chọn chuyên khoa</label><br />
                        <Select name="selectSpecialty" id=""
                            value={selectSpecialty}
                            onChange={this.handleChangeInfor}
                            options={listSpecialty}
                            placeholder={'Chọn chuyên khoa'}>

                        </Select>
                    </div>

                </div>
                <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)}
                    onChange={this.handleEditorChange}
                    value={this.state.contentMarkdown} />

                <button className="manage-doctor-btn" onClick={() => this.handleSaveDoctor()}>
                    Lưu thông tin
                </button>
                <div style={{ height: '100px' }}></div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        allDoctors: state.admin.allDoctors,
        province: state.admin.province,
        price: state.admin.price,
        payment: state.admin.payment,
        specialty: state.admin.specialty,
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctor: () => dispatch(actions.getAllDoctor()),
        getProvince: () => dispatch(actions.getProvince()),
        getPrice: () => dispatch(actions.getPrice()),
        getPayment: () => dispatch(actions.getPayment()),
        getSpecialty: () => dispatch(actions.getSpecialty()),
        createInfoDoctor: (data) => dispatch(actions.createInfoDoctor(data)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
