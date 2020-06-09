import React, { Component } from 'react'

export default class Exercise extends Component {
    state = {
        targetMuscle: [],
        muscleTarget: []
    }


    filter = (muscle) => {
        const muscleIndex = this.props.muscleGroupsArray.findIndex(muscle => muscle )
    }

    // filterMuscles = () => {
    //     const filteredIndex = this.props.exercisesData.filter(exercise => {
    //         return exercise.muscles.some(muscle => muscle === this.props.muscleGroupsArray.indexOf(muscle))
    //         })
    //         console.log(filteredIndex)
    //         this.setState({
    //             muscleTarget: filteredIndex
    //         })
    // }

    render() {
        return (
            <div>
                {/* {this.props.exercisesData.map(exercise =>(
                    <div className="exercise" key={exercise.index}>
                        <h3>Name: {exercise.name}</h3>
                        <p>Description: {exercise.description}</p>
                        <p>Muscles Used: {exercise.muscles}</p>
                    </div>
                ))} */}
            </div>
        )
    }
}
