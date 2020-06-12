import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import '../CSS/Header.css'

export default class Header extends Component {
    render() {
        return (
            <>
            <div className="logo">
                <Link to="/">
                <h1>GAINS ON</h1>
                </Link>
                <div className="tagline">
                A simplistic approach to fitness.
                </div>
            </div>
            </>
        )
    }
}

