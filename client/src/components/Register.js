import React, { Component } from 'react'
import Login from './Login'
import { Link } from 'react-router-dom'

export default class Register extends Component {
    render() {
        return (
            <div>
                <form className="ui form">
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" placeholder="Email" />
                    </div>
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Username" />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Password" />
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
