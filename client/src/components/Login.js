import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { loginUser } from '../services/api'

export default class Login extends Component {
    constructor(props) {
        super(props) 
        this.state = {
            username: "",
            password: "",
            isLoggedIn: false
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
        try {
        const setUser = {
            "username": this.state.username,
            "password": this.state.password
        }
        console.log(setUser)

        const user = await loginUser(setUser)
        this.props.onChangeHandler(user.token)
        console.log(localStorage.getItem('token'))
        localStorage.setItem('token', user.token)
        console.log(user)
        this.setState({
            isLoggedIn: true
        })
        } catch (e) {
        console.log("Wrong Username or Password: ", e)
        }
    }



    render() {
        return (
            <div>
                <form className="ui form" onSubmit={this.onFormSubmit}>
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" value={this.state.username} placeholder="Username" onChange={this.onFormChange}/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" value={this.state.password} placeholder="Password" onChange={this.onFormChange}/>
                    </div>
                    <button className="ui positive fluid button" type="submit">Sign In</button>
                </form>
                <div className="ui warning message">
                    <i className="icon help"></i>
                    Don't Have An Account? <Link to="/register" href="#">Register here</Link>
                </div>
            </div>
        )
    }
}
