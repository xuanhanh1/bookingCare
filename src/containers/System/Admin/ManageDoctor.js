import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/adminAction';
import './ManageDoctor.scss'
import { getAInfoDoctorService } from '../../../services/userService'
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import Select from 'react-select';
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageDoctor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            contentMarkdown: '',
            contentHTML: '',
            description: '',
            selectedOption: '',
            listDoctors: [],
        }
    }

    componentDidMount() {
        this.props.getAllDoctor();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.allDoctors !== this.props.allDoctors) {
            let dataInput = this.inputSeclectData(this.props.allDoctors)
            // console.log(dataInput)
            this.setState({
                listDoctors: dataInput
            })
        }
    }
    handleEditorChange = ({ html, text }) => {
        this.setState({
            contentMarkdown: text,
            contentHTML: html
        });

    }
    handleChange = async (selectedOption) => {
        this.setState({
            selectedOption: selectedOption,
        });
        // console.log(selectedOption)
        let res = await getAInfoDoctorService(selectedOption.value);
        console.log(res)
        if (res && res.errCode === 0 && res.data && res.data.Markdown) {
            this.setState({
                contentMarkdown: res.data.Markdown.contentMarkdown,
                contentHTML: res.data.Markdown.contentHTML,
                description: res.data.Markdown.description,
            })
        } else {
            this.setState({
                contentMarkdown: '',
                contentHTML: '',
                description: '',
            })
        }

    };
    onChangeInput = (event) => {
        let description = event.target.value;
        console.log(description);
        this.setState({
            description: description
        });
    }
    inputSeclectData = (inputData) => {
        let result = [];
        if (inputData) {
            inputData.map((item, key) => {
                let object = {};
                let labelName = `${item.firstName} ${item.lastName}`;
                object.label = labelName;
                object.value = item.id;
                result.push(object);
            })
        }
        return result;
    }
    handleSaveDoctor = () => {
        console.log(this.state)
        this.props.createInfoDoctor({
            contentHTML: this.state.contentHTML,
            contentMarkdown: this.state.contentMarkdown,
            description: this.state.description,
            doctorId: this.state.selectedOption.value,
        })

        this.setState({
            contentHTML: '',
            contentMarkdown: '',
            description: '',
            // doctorId: ,
        })
    }


    render() {
        let { selectedOption, listDoctors } = this.state;
        return (
            <div className="container">
                <h3 className="mt-3">
                    THÊM THÔNG TIN BÁC SĨ
                </h3>

                <div className="manage-doctor">
                    <div className="manage-doctor-select">
                        <Select
                            value={this.state.selectedOption}
                            onChange={this.handleChange}
                            options={this.state.listDoctors}
                        />
                    </div>

                    <div className="manage-doctor-textarea">
                        <textarea
                            value={this.state.description}
                            onChange={this.onChangeInput}
                        ></textarea>
                    </div>

                </div>
                <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)}
                    onChange={this.handleEditorChange}
                    value={this.state.contentMarkdown} />

                <button className="manage-doctor-btn" onClick={() => this.handleSaveDoctor()}>
                    lưu thông tin
                </button>
                <div style={{ height: '100px' }}></div>
            </div>
        );
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
        createInfoDoctor: (data) => dispatch(actions.createInfoDoctor(data)),

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageDoctor);
