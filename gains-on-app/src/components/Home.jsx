import React, { Component } from 'react'
import ExerciseList from './ExerciseList'
import Header from './Header'
import Footer from './Footer'
import BodyDiagram from './BodyDiagram'
import { Route } from 'react-router-dom'
import ExerciseDetails from './ExerciseDetails'
import '../CSS/Main.css'

export default class Home extends Component {
    state = {
        exercisesData: []
    }

    getExercises = async () => {
        let url = `https://wger.de/api/v2/exercise/?language=2&status=2`
        while (url) {
            const response = await fetch(url)
            const data = await response.json()
            for(let exerciseInfo of data){
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
                <Route path="/">
                    <Header />
                </Route>
                <div className='main-container'>
                    <div className="main-content">
                        <Route path="/">
                        <ExerciseList exerciseData={this.state.exercisesData} />
                        </Route>
                    </div>
                    <div className="main-content">
                        <BodyDiagram />
                    </div>
                    <div className="main-content">
                        <Route path='/exercise-details/:exercise'>
                        <ExerciseDetails exerciseData={this.state.exercisesData} />
                        </Route>
                    </div>
                </div>
                <Footer />
            </div>
        )
    }
}
