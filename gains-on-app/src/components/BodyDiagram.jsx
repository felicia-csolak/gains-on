import React, { Component } from 'react'
import diagram from  '../musclegroups.png'
import '../CSS/Main.css'

export default class BodyDiagram extends Component {
    render() {
        return (
            <div className='body-diagram'>
                <img src={diagram} />
            </div>
        )
    }
}
