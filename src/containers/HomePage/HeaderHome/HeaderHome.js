import React, { Component } from 'react'
import './HeaderHome.scss'

export class HeaderHome extends Component {
    render() {
        return (


            <div className="header-home">
                <div className="contenthead">
                    <div className="contenthead_up">
                        <div className="contenthead_up_ct">
                            <h1>NỀN TẢNG Y TẾ</h1>
                            <h4>CHĂM SÓC SỨC KHỎE TOÀN DIỆN</h4>
                        </div>
                        <div className="contenthead_up_search ">
                            <input type="text " placeholder="Tìm kiếm tại đây" />
                            <i className="fas fa-search" />
                        </div>
                    </div>
                    <div className="contenthead_down">
                        <div className="contenthead_down_icon">
                            <i className="fas fa-hospital-user" />
                            Khám chuyên Khoa
                        </div>
                        <div className="contenthead_down_icon">
                            <i className="fas fa-hospital-user" />
                            Khám chuyên Khoa
                        </div>
                        <div className="contenthead_down_icon">
                            <i className="fas fa-hospital-user" />
                            Khám chuyên Khoa
                        </div>
                        <div className="contenthead_down_icon">
                            <i className="fas fa-hospital-user" />
                            Khám chuyên Khoa
                        </div>
                        <div className="contenthead_down_icon">
                            <i className="fas fa-hospital-user" />
                            Khám chuyên Khoa
                        </div>
                        <div className="contenthead_down_icon">
                            <i className="fas fa-hospital-user" />
                            Khám chuyên Khoa
                        </div>
                    </div>
                </div>
            </div>

        )
    }
}

export default HeaderHome
