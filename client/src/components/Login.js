import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Login extends Component {
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
