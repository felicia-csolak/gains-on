import React, { Component } from 'react'
import diagram from  '../musclegroups.png'

export default class BodyDiagram extends Component {
    render() {
        return (
            <div>
                <img src={diagram} />
            </div>
        )
    }
}
