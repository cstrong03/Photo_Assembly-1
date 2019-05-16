import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class Register extends Component {
    render() {
        const { username, email, password, createdUser, onFormChange, onFormSubmit } = this.props;
        let isCreated = createdUser ? <Redirect to="/login" /> : null
        return (
            <div>
                { isCreated }
                <form className="ui form" onSubmit={onFormSubmit}>
                    <div className="field">
                        <label>Email</label>
                        <input type="text" name="email" value={email} placeholder="Email" onChange={onFormChange} />
                    </div>
                    <div className="field">
                        <label>Username</label>
                        <input type="text" name="username" value={username} placeholder="Username" onChange={onFormChange} />
                    </div>
                    <div className="field">
                        <label>Password</label>
                        <input type="password" name="password" value={password} placeholder="Password" onChange={onFormChange} />
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
