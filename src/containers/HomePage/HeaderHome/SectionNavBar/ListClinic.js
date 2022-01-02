import React, { Component } from 'react'
import './ListNavBar.scss';
import * as actions from '../../../../store/actions/adminAction';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import Navbar from '../Navbar'
<<<<<<< HEAD
import FooterHome from '../../FooterHome/FooterHome'

class Doctor extends Component {
=======

class ListClinic extends Component {
>>>>>>> b814dca835d64f8eb27d726711c53479b380b8a7
    constructor(props) {
        super(props);

        this.state = {
            listDoctors: [],
        }
    }

    componentDidMount() {
        this.props.getAllDoctor();
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            this.setState({
                listDoctors: this.props.allDoctors
            })
        }

    }
    handerViewDetailDoctor = (doctor) => {
        // console.log(doctor)
        this.props.history.push(`/doctorDetail/${doctor}`)

    }
    render() {
        let listDoctors = this.state.listDoctors;
        console.log("all doctor ne: ", listDoctors)
        return (
            <>
                <Navbar />
                < section className="section container" >
<<<<<<< HEAD
                    <div className='body-list'>
                        <div className="section__header title">
                            <h3>Danh sách bác sĩ</h3>
                        </div>

                        {listDoctors.map((item, index) => {
                            let imageBase64 = '';
                            if (item.image) {
                                imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                            }
                            let name = `${item.lastName} ${item.firstName}`
                            console.log(item)
                            return (
                                <div className="sections-content list-nav"
                                    onClick={() => { this.handerViewDetailDoctor(item.id) }}
                                >
                                    < img className='avatar' src={imageBase64} alt="" />
                                    <p className='name'> Bác sĩ {name}</p>
                                </div>
                            )
                        })}
                    </div>
                </section >
                <FooterHome />

=======
                    <div className="section__header title">
                        <h3>Danh sách phòng khám</h3>
                    </div>
                    {listDoctors.map((item, index) => {
                        let imageBase64 = '';
                        if (item.image) {
                            imageBase64 = new Buffer(item.image, 'base64').toString('binary');
                        }
                        let name = `${item.lastName} ${item.firstName}`
                        console.log(item)
                        return (
                            <div className="sections-content list-nav"
                                onClick={() => { this.handerViewDetailDoctor(item.id) }}
                            >
                                < img className='avatar' src={imageBase64} alt="" />
                                <p className='name'> Bác sĩ {name}</p>
                            </div>
                        )
                    })}

                </section >
>>>>>>> b814dca835d64f8eb27d726711c53479b380b8a7
            </>

        )
    }
}

const mapStateToProps = state => {
    return {
        allDoctors: state.admin.allDoctors
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllDoctor: () => dispatch(actions.getAllDoctor()),
    };
};

<<<<<<< HEAD
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Doctor));
=======
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(ListClinic));
>>>>>>> b814dca835d64f8eb27d726711c53479b380b8a7
