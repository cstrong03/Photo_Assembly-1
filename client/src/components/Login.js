import React, { Component } from 'react'

export default class Login extends Component {
    render() {
        return (
            <div>
                <form className="ui form">
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="first-name" placeholder="Email" />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="text" name="last-name" placeholder="Password" />
                    </div>
                    <button className="ui positive fluid button" type="submit">Sign In</button>
                </form>
                <div className="ui warning message">
                    <i className="icon help"></i>
                    Don't Have An Account? <a href="#">Register here</a>
                </div>
            </div>
        )
    }
}
