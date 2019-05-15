import React, { Component } from 'react'
import { Route, Link } from 'react-router-dom'
import FeedView from './FeedView'
import CreatePost from './CreatePost'
import Profile from './Profile'

export default class LowerMenu extends Component {
    render() {
        return (
            <div className="ui bottom fixed three item  massive menu">
                <Link to="/feed" className="item" data-tooltip="News Feed">
                    <i className="home icon"></i>
                </Link>
                <Link to="/post/create" className="item" data-tooltip="Add Post">
                    <i className="plus square outline camera icon"></i>
                </Link>
                <Link to="/profile" className="item" data-tooltip="Profile">
                    <i className="user icon"></i>
                </Link>
            </div>
        )
    }
}
