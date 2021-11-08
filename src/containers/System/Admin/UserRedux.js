import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
class UserRedux extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
            firstName: '',
            lastName: '',
            phoneNumber: '',
            address: '',
            gender: '',
            position: '',
            role: '',
            image: '',
        }
    }

    componentDidMount() {

    }


    onCreateUser = (event) => {
        event.preventDefault();
        console.log('check state when create user', this.state)
        let isValid = this.onCheckValidity();
        if (isValid === false) return;

    }
    onCheckValidity = () => {
        let isValid = true;
        let checkArr = ['email', 'password', 'firstName', 'lastName', 'phoneNumber', 'address', 'gender', 'position', 'role'];
        for (let i = 0; i < checkArr.length; i++) {
            if (!this.state[checkArr[i]]) {
                isValid = false;
                alert('Please enter a valid ' + checkArr[i])
                break;
            }
        }
        return isValid;
    }

    onChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({
            ...copyState
        });
    }
    render() {
        let { email, password, firstName, lastName, phoneNumber, address } = this.state;
        return (
            <div className="container">
                <h3 className="mt-3">
                    Thêm mới bác sĩ
                </h3>

                <form className="">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputEmail4">Email</label>
                            <input type="email" className="form-control"
                                id="inputEmail4" placeholder="Email"
                                value={email}
                                onChange={(event) => { this.onChangeInput(event, 'email') }}
                            />
                        </div>
                        <div className="form-group col-md-6">
                            <label htmlFor="inputPassword4">Password</label>
                            <input type="password" className="form-control"
                                id="inputPassword4" placeholder="Password"
                                value={password}
                                onChange={(event) => { this.onChangeInput(event, 'password') }}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress">Họ</label>
                        <input type="text" className="form-control"
                            id="inputAddress" placeholder="Nguyễn "
                            value={firstName}
                            onChange={(event) => { this.onChangeInput(event, 'firstName') }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Tên</label>
                        <input type="text" className="form-control"
                            id="inputAddress2" placeholder="Văn A"
                            value={lastName}
                            onChange={(event) => { this.onChangeInput(event, 'lastName') }}
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="inputAddress2">Địa chỉ</label>
                        <input type="text" className="form-control"
                            id="inputAddress2" placeholder="Thành phố Hồ Chí Minh"
                            value={address}
                            onChange={(event) => { this.onChangeInput(event, 'address') }}
                        />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label htmlFor="inputCity">Số điện thoại</label>
                            <input type="text" className="form-control" id="inputCity"
                                value={phoneNumber}
                                onChange={(event) => { this.onChangeInput(event, 'phoneNumber') }}
                            />
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputState">Giới tính</label>
                            <select id="inputState" className="form-control"
                                onChange={(event) => { this.onChangeInput(event, 'gender') }}
                            >
                                <option selected>Choose...</option>
                                <option value="male" >Nam</option>
                                <option value="female" >Nữ</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputState">Chức danh</label>
                            <select id="inputState" className="form-control"
                                onChange={(event) => { this.onChangeInput(event, 'position') }}
                            >
                                <option selected>Choose...</option>
                                <option value="Dr">Tiến sĩ</option>
                                <option value="professor">Giáo sư</option>
                                <option value="Master">Thạc sĩ</option>
                                <option value="Associate Professor">Phó giáo sư</option>
                            </select>
                        </div>
                        <div className="form-group col-md-2">
                            <label htmlFor="inputState">Vai trò</label>
                            <select id="inputState" className="form-control"
                                onChange={(event) => { this.onChangeInput(event, 'role') }}
                            >
                                <option selected>Choose...</option>
                                <option value="R0">Admin</option>
                                <option value="R1">Bác sĩ</option>
                                <option value="R2">Bệnh nhân</option>
                            </select>
                        </div>

                    </div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlFile1">Ảnh Đại diện</label>
                        <input type="file" className="form-control-file" id="exampleFormControlFile1" />
                    </div>


                    <button type="submit" className="btn btn-primary"
                        onClick={(event) => this.onCreateUser(event)}
                    >Đăng ký</button>
                </form>

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
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);
