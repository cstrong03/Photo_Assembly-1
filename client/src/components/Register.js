import React, { Component } from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { createUser } from '../services/api'

export default class Register extends Component {
    constructor() {
        super()
        this.state = {
            email: '',
            username: '',
            password: '',
            created: false
        }
    }

    onFormChange = (event) => {
        // const element = event.target
        // const name = element.name
        // const value = element.value
        const { name, value } = event.target;
        // console.log(name, value)
        // const newState = {}
        // newState[name] = value
        this.setState({[name]: value})
    }

    onFormSubmit = async (event) => {
        event.preventDefault()

        console.log("Form Submitted: ")

        const setUser = {
            "email": this.state.email,
            "username": this.state.username,
            "password": this.state.password
        }
        const user = await createUser(setUser)
        console.log(user)
        this.setState({
            created: true
        })
    }

    render() {
        return (
            <div>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" value={this.state.email} placeholder="Email" onChange={this.onFormChange} />
                    </div>
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.onFormChange} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.onFormChange} />
                    </div>
                    <button className="ui positive fluid button" type="submit">Sign Up</button>
                </form>
                <div className="ui warning message">
                    <i className="icon help"></i>
                    Already Have An Account? <Link to='/login' href="#">Login here</Link>
                </div>
            </div>
        )
    }
}
