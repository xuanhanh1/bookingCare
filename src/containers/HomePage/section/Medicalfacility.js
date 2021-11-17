import React, { Component } from 'react'
import Slider from "react-slick";
import './Specialty.scss'
import './Medicalfacility.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialtyimg from '../../../assets/images/co-xuong-khop.jpg'


class Medicalfacility extends Component {
    render() {
        var settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        return (
            <section className="Medicalfacility section">
                <div className="section-header">
                    <h3>Cơ sở y tế nổi bật</h3>
                    <button>Xem Thêm</button>
                </div>
                <div className="section-content">
                    <Slider {...settings}>
                        <div className="section-content-img">
                            <img src={specialtyimg}></img>
                            <span>Cơ sở Thu Cúc</span>
                        </div>
                        <div className="section-content-img">
                            <img src={specialtyimg}></img>
                            <span>Cơ sở Thu Cúc</span>
                        </div>
                        <div className="section-content-img">
                            <img src={specialtyimg}></img>
                            <span>Cơ sở Thu Cúc</span>
                        </div>
                        <div className="section-content-img">
                            <img src={specialtyimg}></img>
                            <span>Cơ sở Thu Cúc</span>
                        </div>
                        <div className="section-content-img">
                            <img src={specialtyimg}></img>
                            <span>Cơ sở Thu Cúc</span>
                        </div>
                        <div className="section-content-img">
                            <img src={specialtyimg}></img>
                            <span>Cơ sở Thu Cúc</span>
                        </div>
                    </Slider>
                </div>
            </section>
        )
    }
}

export default Medicalfacility
