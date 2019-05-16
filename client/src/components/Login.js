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
        const { name, value } = event.target;
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
        localStorage.setItem('token', user.token)
        console.log(user)
        console.log(localStorage.getItem('token'))

        this.setState({
            isLoggedIn: true
        })
        } catch (e) {
        console.log("Wrong Username or Password: ", e)
        }
    }




    render() {
        const { username, password, onLoginSubmit, onFormChange } = this.props;
        return (
            <div>
                <form className="ui form" onSubmit={onLoginSubmit}>
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" value={username} placeholder="Username" onChange={onFormChange}/>
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" value={password} placeholder="Password" onChange={onFormChange}/>
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
