import React, { Component } from 'react'
import Axios from 'axios'

import Exercise from './Exercise'

export default class ExerciseList extends Component {

        // console.log(index)
        // const exercisesSelected = response.data.results
        // const filteredIndex = exercisesSelected.filter(exercise => {
        //     console.log(exercise)
        //     return exercise.muscles.some(muscle => muscle === index)
        // })
        // console.log(filteredIndex)
        // this.setState({
        //     muscleTarget: filteredIndex
        // })
    // }

    // displayExercises() {
    //     this.state.muscleTarget.map(target => (
    //         <div className='target' key={target.id}>
    //             <h3>{target.name}</h3>
    //         </div>
    //     ))
    // }



    render() {
        return (
            <div className="exercise-list">
                <Exercise />
                        {/* <button onClick={() => { this.getExercises(index) }}>
                            Get Exercise
                            </button> */}
                {/* ))} */}
            </div>
        )
    }
}
