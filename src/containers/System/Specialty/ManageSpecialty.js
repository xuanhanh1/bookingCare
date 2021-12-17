import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/adminAction';
import MarkdownIt from 'markdown-it';
import MdEditor from 'react-markdown-editor-lite';
// import style manually
import 'react-markdown-editor-lite/lib/index.css';
import './ManageSpecialty.scss';
const mdParser = new MarkdownIt(/* Markdown-it options */);

class ManageSpecialty extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    componentDidMount() {

    }
    componentDidUpdate(prevProps, prevState, snapshot) {

    }

    render() {

        return (
            <div className="container">
                <h3 className="mt-3">
                    QUẢN LÝ CHUYÊN KHOA
                </h3>

                <div className="manage-spacialty">


                    <div className="manage-spacialty-4">
                        <label>Tên chuyên khoa </label><br />
                        <input name="nameClinic"
                            className="form-control"
                        ></input>
                    </div>
                    <div className="manage-spacialty-5">
                        <label>Thêm ảnh </label><br />
                        <input name="nameClinic"
                            className=""
                            type="file"
                        ></input>
                    </div>

                </div>
                <MdEditor style={{ height: '500px' }} renderHTML={text => mdParser.render(text)}
                    onChange={this.handleEditorChange}
                    value={this.state.contentMarkdown} />

                <button className="manage-doctor-btn" onClick={() => this.handleSaveDoctor()}>
                    Lưu thông tin
                </button>
                <div style={{ height: '100px' }}></div>
            </div>
        )
    }

}

const mapStateToProps = state => {
    return {

    };
};

const mapDispatchToProps = dispatch => {
    return {

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ManageSpecialty);
