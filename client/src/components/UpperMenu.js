import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'

export default class LowerMenu extends Component {



    render() {
        console.log(this.props.isLoggedIn)
        if (this.props.isLoggedIn){
            return (
                <div className="ui top fixed borderless two item massive menu">
                    <div className="header item">
                        <Link to="/" href="#">Photo Assembly</Link>
                    </div>
                </div>
            )
        }else {
            return (
                <div className="ui top fixed borderless two item massive menu">
                    <div className="header item">
                        <Link to="/" href="#">Photo Assembly</Link>
                    </div>
                    <div className="item">
                        <Link to='/login' href="#">Sign In</Link>
                    </div>
                </div>
            )
        }
        
    }
}
