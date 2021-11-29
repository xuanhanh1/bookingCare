import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/adminAction';
import Navbar from '../../HomePage/HeaderHome/Navbar'
import './DetailDoctor.scss'
import { getAInfoDoctorService } from '../../../services/userService'

class DerailDoctor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            detailDoctor: {},
            image: '',
            contentHTML: '',
            contentMarkdown: '',
            description: '',
        }
    }

    async componentDidMount() {
        if (this.props.match && this.props.match.params && this.props.match.params.id) {
            let id = this.props.match.params.id;
            let res = await getAInfoDoctorService(id);
            let imageBase64 = new Buffer(res.data.image, 'base64').toString('binary');
            // console.log(res.data.Markdown.contentHTML)
            this.setState({
                detailDoctor: res.data,
                image: imageBase64,
                contentHTML: res.data.Markdown.contentHTML,
                contentMarkdown: res.data.Markdown.contentMarkdown,
                description: res.data.Markdown.description,
            })
        }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {

    }
    getImage = (a) => {


    }

    render() {

        // console.log(this.props.match.params.id)
        let { detailDoctor, image, contentHTML, contentMarkdown, description } = this.state
        // console.log(this.state)
        return (
            <div className="">
                <Navbar />

                <div className="doctor ">
                    <div className="doctor-header container">
                        <div className="doctor-header-img">
                            <img src={image}></img>
                        </div>
                        <div className="doctor-header-content">
                            <h2>Giao su tien si <span>{detailDoctor.lastName}</span></h2>
                            <p> {description} </p>
                        </div>
                    </div>
                    <div className="doctor-content">
                        <div className="container" dangerouslySetInnerHTML={{ __html: contentHTML }}>

                        </div>
                    </div>
                </div>
                <div style={{ height: '100px' }}></div>
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
        getAllDoctor: () => dispatch(actions.getAllDoctor()),


    };
};

export default connect(mapStateToProps, mapDispatchToProps)(DerailDoctor);
