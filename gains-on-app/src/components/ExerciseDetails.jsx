import React from 'react'
import { withRouter } from 'react-router-dom'

function ExerciseDetails(props) {
    const exerciseData = props.match.params.exercise
    const selectedExercise = props.exerciseData.find(exercise => {
        return exercise.name === exerciseData
    })

    return (
        <div className='exercise-details'>
            {selectedExercise ? <><h1>{selectedExercise.name}</h1> <div className="exercise-description" dangerouslySetInnerHTML={{ __html: selectedExercise.description }} /></> : null}
        </div>
    )
}

export default withRouter(ExerciseDetails)
