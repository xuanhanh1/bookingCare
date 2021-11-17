import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import { connect } from 'react-redux';
import * as actions from '../../../store/actions/adminAction'
import './UserTable.scss';
class UsersTable extends Component {

    constructor(props) {
        super(props);

        this.state = {
            users: [],
        }

    }

    componentDidMount() {
        this.props.getAllUsers()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        // console.log(prevProps)
        if (prevProps.users !== this.props.users) {
            this.setState({
                users: this.props.users
            });
        }
    }

    deleteUsers = (user) => {

        this.props.deleteUsers(user.id)
    }

    editUsers = (user) => {
        // console.log(user)
        this.props.editUser(user)
    }
    render() {
        let { users } = this.state
        return (

            <div className="container">
                <div className="table-container mt-3 mb-3">
                    <table class="table table-bordered">
                        <thead>
                            <tr className="bg-success">
                                <th scope="col">#</th>
                                <th scope="col">Email</th>

                                <th scope="col">First Name</th>
                                <th scope="col">Last Name</th>
                                <th scope="col">Address</th>
                                <th scope="col">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((item, index) => {
                                return (
                                    <tr key={index}>
                                        <th scope="row">{index}</th>
                                        <td>{item.email}</td>
                                        <td>{item.firstName}</td>
                                        <td>{item.lastName}</td>
                                        <td>{item.address}</td>
                                        <td>
                                            <i className="fas fa-edit"
                                                onClick={() => this.editUsers(item)}
                                            ></i>
                                            <i className="fas fa-trash-alt"
                                                onClick={() => this.deleteUsers(item)}
                                            ></i>
                                        </td>

                                    </tr>
                                )
                            })}

                        </tbody>
                    </table>
                </div>

                <div style={{ height: '100px' }}></div>
            </div>
        );
    }

}

const mapStateToProps = state => {
    return {
        users: state.admin.users
    };
};

const mapDispatchToProps = dispatch => {
    return {
        getAllUsers: () => dispatch(actions.getAllUsers()),
        deleteUsers: (id) => dispatch(actions.deleteUsers(id))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersTable);
