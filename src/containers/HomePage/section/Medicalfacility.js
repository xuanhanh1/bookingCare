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
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 4,
            initialSlide: 0,
            responsive: [

                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className="specialty container section">
                {/* <h1 className="section_heading">Chuyên khoa phổ biến</h1> */}
                <div className="section__header">
                    <h3>Cơ sở y tế nổi bật</h3>
                    <button>Xem Thêm</button>
                </div>
                <Slider {...settings}>
                    <div className="specialty-card">
                        <div className="card">
                            <div className="card-img-top card-img" style={{ backgroundImage: `url(${specialtyimg})` }}></div>
                            <div className="card-body">
                                <h5 className="card-title">Cơ sở quận 3</h5>
                            </div>
                        </div>
                    </div>
                    <div className="specialty-card">
                        <div className="card">
                            <div className="card-img-top card-img" style={{ backgroundImage: `url(${specialtyimg})` }}></div>
                            <div className="card-body">
                                <h5 className="card-title">Cơ sở quận 3</h5>
                            </div>
                        </div>
                    </div>
                    <div className="specialty-card">
                        <div className="card">
                            <div className="card-img-top card-img" style={{ backgroundImage: `url(${specialtyimg})` }}></div>
                            <div className="card-body">
                                <h5 className="card-title">Cơ sở quận 3</h5>
                            </div>
                        </div>
                    </div>
                    <div className="specialty-card">
                        <div className="card">
                            <div className="card-img-top card-img" style={{ backgroundImage: `url(${specialtyimg})` }}></div>
                            <div className="card-body">
                                <h5 className="card-title">Cơ sở Bình Thạnh</h5>
                            </div>
                        </div>
                    </div>
                    <div className="specialty-card">
                        <div className="card">
                            <div className="card-img-top card-img" style={{ backgroundImage: `url(${specialtyimg})` }}></div>
                            <div className="card-body">
                                <h5 className="card-title">Cơ sở quận 7</h5>
                            </div>
                        </div>
                    </div>
                    <div className="specialty-card">
                        <div className="card">
                            <div className="card-img-top card-img" style={{ backgroundImage: `url(${specialtyimg})` }}></div>
                            <div className="card-body">
                                <h5 className="card-title">Cơ sở quận 5</h5>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div >
        )
    }
}

export default Medicalfacility
