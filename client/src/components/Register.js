import React, { Component } from 'react'

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
                    <button className="ui positive fluid button" type="submit">Sign In</button>
                </form>
                <div className="ui warning message">
                    <i className="icon help"></i>
                    Already Have An Account? <a href="#">Login here</a>
                </div>
            </div>
        )
    }
}
