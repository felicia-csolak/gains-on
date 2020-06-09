import React, { Component } from 'react'

import ExerciseList from './ExerciseList'
import Header from './Header'
import Footer from './Footer'

export default class Home extends Component {
    state = {
        exercisesData: []
    }

    getExercises = async () => {
        let url = `https://wger.de/api/v2/exercise/?language=2&status=2`
        while (url) {
            const response = await fetch(url)
            const data = await response.json()
            for(const exerciseInfo of data.results){
                // console.log(exerciseInfo)
                this.setState({
                    exercisesData: [...this.state.exercisesData, exerciseInfo]
                })
            }
            url = data.next
        }
    }

    componentDidMount = async () =>{
        this.getExercises()
    }

    render() {
        return (
            <div>
                <Header exerciseData={this.state.exercisesData} />
                <ExerciseList exerciseData={this.state.exercisesData} />
                <Footer />
            </div>
        )
    }
}
