import React, { Component } from 'react'
import '../CSS/Header.css'
import Form from './Form'


export default class Header extends Component {
    render() {
        return (
            <>
            <div className="logo">
                <h1>GAINS ON</h1>
                <div className="tagline">
                A simplistic approach to fitness.
                </div>
            </div>
            <div className="formDiv">
                <Form exerciseData={this.props.exerciseData}/>
            </div>
            </>
        )
    }
}

