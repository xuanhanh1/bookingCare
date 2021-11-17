import React, { Component } from 'react'
import Slider from "react-slick";
import './Specialty.scss';
import './Doctor.scss';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import specialtyimg from '../../../assets/images/co-xuong-khop.jpg'
import * as actions from '../../../store/actions/adminAction';
import { connect } from 'react-redux';

class Doctor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            topDoctors: [],
        }
    }

    componentDidMount() {
        this.props.getTopDoctor();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.topDoctors !== this.props.topDoctors) {
            this.setState({
                topDoctors: this.props.topDoctors
            })
        }
    }

    render() {
        var settings = {
            infinite: false,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1
        };
        // console.log('top doctor in doctor.js', this.state.topDoctors)
        let topDoctors = this.state.topDoctors;
        return (
            <section className="specialty section">
                <div className="section-header">
                    <h3>Bác sĩ nổi bật</h3>
                    <button>Xem Thêm</button>
                </div>
                <div className="section-content">
                    <Slider {...settings}>
                        {topDoctors.map((item, index) => {
                            let imageBase64 = '';
                            if (item.image) {
                                imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                                console.log(imageBase64)
                            }
                            console.log(item)
                            return (
                                <div className="section-content-img doctor-img">
                                    <img src={imageBase64}></img>
                                    <h3>Phó giáo sư tiến sĩ {item.lastName}</h3>
                                    <span>Co xuong khop</span>
                                </div>
                            )
                        })}


                    </Slider>
                </div>
            </section>
        )
    }
}

const mapStateToProps = state => {
    return {
        topDoctors: state.admin.topDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getTopDoctor: () => dispatch(actions.getTopDoctor())

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);