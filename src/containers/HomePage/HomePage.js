import React, { Component } from 'react'
import HeaderHome from './HeaderHome/HeaderHome'
import Navbar from './HeaderHome/Navbar'
import Specialty from './section/Specialty';
import Medicalfacility from './section/Medicalfacility';
import Doctor from './section/Doctor';
import "./HomePage.scss"

export class HomePage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <HeaderHome />
                <Specialty />
                <Medicalfacility />
                <Doctor />
            </div>
        )
    }
}

export default HomePage
