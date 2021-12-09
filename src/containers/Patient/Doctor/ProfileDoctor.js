import React, { Component } from 'react'
import './ProfileDoctor.scss';
import { getProfileDoctorService } from '../../../services/userService';
import NumberFormat from 'react-number-format';
import moment from 'moment';
class ProfileDoctor extends Component {
    constructor(props) {
        super(props);

        this.state = {
            dataProfile: {}
        }
    }

    async componentDidMount() {
        let res = await getProfileDoctorService(this.props.doctorId);
        // console.log('get profile server ', res);
        if (res && res.errCode === 0) {
            this.setState({
                dataProfile: res.data
            })
        }


    }
    async componentDidUpdate(prevProps, prevState, snapshot) {

    }
    capitalizeFirstLetter(string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
    renderTime = (time) => {
        // console.log('render time', time)
        if (time) {
            let dateAa = moment.unix(+time.date / 1000).format('dddd - DD/MM/YYYY');
            let dateAA = this.capitalizeFirstLetter(dateAa);
            // console.log('render date', dateAA);
            return (
                <>
                    <div>
                        {time && time.timeTypeData && time.timeTypeData.valueVi + ' - -  '} {dateAA}

                    </div>
                    <div>Miễn phí đặt chỗ </div>
                </>
            )
        }

    }
    render() {
        let { dataProfile } = this.state;
        // console.log('props in ptofile: ', this.props)
        let { showDescription, dataSchedule } = this.props;
        let description = dataProfile.Doctor_Infor;
        // console.log('description: ', description)
        // console.log('state in profile', dataProfile);
        let name = dataProfile.firstName + ' ' + dataProfile.lastName;
        // console.log('name: ', name)
        return (
            <div className="doctor-profile-header container">
                <div className="doctor-profile-header-img">
                    <img src={dataProfile.image}></img>
                </div>
                <div className="doctor-profile-header-content">
                    <h2>Giao su tien si <span>{name}</span></h2>
                    <p>

                        {showDescription &&
                            dataProfile && dataProfile.Markdown &&
                            dataProfile.Markdown.description}
                        {this.renderTime(dataSchedule)}
                    </p>
                </div>
                <div className="price"> Giá khám:
                    <span>
                        <NumberFormat
                            value={
                                dataProfile && dataProfile.Doctor_Infor && dataProfile.Doctor_Infor.priceTypeData &&
                                dataProfile.Doctor_Infor.priceTypeData.valueVi
                            }
                            thousandSeparator={true}
                            suffix={'VND'}
                            displayType={'text'}
                        />
                    </span>
                </div>

            </div>
        )
    }
}

export default ProfileDoctor
