import React, { Component } from 'react'
import Slider from "react-slick";
import './Specialty.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialtyimg from '../../../assets/images/co-xuong-khop.jpg'


class Specialty extends Component {
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <section className="specialty section">
                <div className="section-header">
                    <h3>Chuyên khoa phổ biến</h3>
                    <button>Xem Thêm</button>
                </div>
                <div className="section-content">
                    <Slider {...settings}>
                        <div className="section-content-img">
                            <img src={specialtyimg}></img>
                            <span>Co xuong khop</span>
                        </div>
                        <div className="section-content-img">
                            <img src={specialtyimg}></img>
                            <span>Co xuong khop</span>
                        </div>
                        <div className="section-content-img">
                            <img src={specialtyimg}></img>
                            <span>Co xuong khop</span>
                        </div>
                        <div className="section-content-img">
                            <img src={specialtyimg}></img>
                            <span>Co xuong khop</span>
                        </div>
                        <div className="section-content-img">
                            <img src={specialtyimg}></img>
                            <span>Co xuong khop</span>
                        </div>
                        <div className="section-content-img">
                            <img src={specialtyimg}></img>
                            <span>Co xuong khop</span>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}

export default Specialty
