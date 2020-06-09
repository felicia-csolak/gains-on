import React, { Component } from 'react'
import Axios from 'axios'

export default class Form extends Component {
    state = {
        muscleGroups: [],
        value: '0',
        exerciseData: [],
        description: false
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
        this.setState({ exerciseData: filteredExercises})
    }

    toggleDescription = () => {
        this.setState(prevState => ({
            description: !prevState.description
        }))
    }

    render() {
        return (
            <div>
                <form onSubmit={this.formHandleSubmit}>
                    <select value={this.state.value} onChange={this.handleChange}>
                        {this.state.muscleGroups.map((muscle, index) => (
                            <option value={muscle.id} key={index}>
                                {muscle.name}
                            </option>
                        ))}
                    </select>
                    <button>Get Targeted Exercises</button>
                </form>
                {this.state.exerciseData.map(exercise => (
                    <div key={exercise.id}>
                       <h1 onClick={this.toggleDescription}>{exercise.name}</h1>
                        <div style={{display: this.state.description ? "block" : "none"}}>
                        <p>{exercise.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}
