import React, { Component } from 'react'

export default class LowerMenu extends Component {
    render() {
        return (
            <div className="ui bottom fixed three item  massive menu">
                <a className="item" data-tooltip="News Feed">
                    <i className="home icon"></i>
                </a>
                <a className="item" data-tooltip="Add Post">
                    <i className="plus square outline camera icon"></i>
                </a>
                <a className="item" data-tooltip="Profile">
                    <i className="user icon"></i>
                </a>
            </div>
        )
    }
}
