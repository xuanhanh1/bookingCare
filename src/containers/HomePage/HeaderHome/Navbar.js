import React, { Component } from 'react'
import './HeaderHome.scss'
class Navbar extends Component {
    render() {
        return (
            <div className="navbar">
                <div className="logo">
                    <i className="fas fa-list" />
                    <div className="logo_img">
                        <img src="./img/2.jpg" alt="anh" />
                    </div>
                </div>
                <div className="content">
                    <div className="content_children">
                        <p> <b>Chuyên Khoa</b> </p>
                        Tìm bác sĩ theo chuyên khoa
                    </div>
                    <div className="content_children">
                        <p> <b>Cơ sở y tế</b> </p>
                        Chọn bệnh viện phòng khám
                    </div>
                    <div className="content_children">
                        <p> <b>Bác sĩ</b> </p>
                        Chọn bác sĩ giỏi
                    </div>
                    <div className="content_children">
                        <p> <b>Gói khám</b> </p>
                        Khám sức khỏe tổng quát
                    </div>
                </div>
                <div className="login">
                    <a href> Đăng nhập/ đăng ký</a>
                </div>
            </div>
        )
    }
}

export default Navbar
