import React, { Component } from 'react'
import Axios from 'axios'
import { Link } from 'react-router-dom'
import '../CSS/Main.css'

export default class ExerciseList extends Component {
    state = {
        muscleGroups: [],
        value: '0',
        exerciseData: [],
    }

    getMuscleGroups = async (index) => {
        const response = await Axios.get('https://wger.de/api/v2/muscle/')
        this.setState({
            muscleGroups: response.data.results,
        })
    }

    componentDidMount = async () => {
        this.getMuscleGroups()
    }

    handleChange = (e) => {
        this.setState({ value: e.target.value })
    }

    formHandleSubmit = (e) => {
        e.preventDefault()
        const muscleSelected = this.state.value
        const filteredExercises = this.props.exerciseData.filter(exercise => {
            return exercise.muscles[0] == muscleSelected
        })
        this.setState({ exerciseData: filteredExercises })
    }


    render() {
        return (
            <div>
                <form onSubmit={this.formHandleSubmit}>
                    <select value={this.state.value} onChange={this.handleChange}>
                        {this.state.muscleGroups &&
                        this.state.muscleGroups.map((muscle, index) => (
                            <option value={muscle.id} key={index}>
                                {muscle.name}
                            </option>
                        ))}
                    </select>
                    <button>Get Targeted Exercises</button>
                </form>
                <div className="exercise-names">
                {this.state.exerciseData.map(exercise => (
                    <div key={exercise.id} className='exercise-list'>
                        <Link to={`/exercise-details/${exercise.name}`}>
                            <h3>{exercise.name}</h3>
                        </Link>
                    </div>
                ))}
                </div>
            </div>
        )
    }
}
