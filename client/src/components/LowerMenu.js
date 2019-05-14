import React, { Component } from 'react'

export default class LowerMenu extends Component {
    render() {
        return (
            <div className="ui bottom fixed three item  massive menu">
                <a className="item">
                    <i className="home icon"></i>
                </a>
                <a className="item">
                    <i className="plus square outline camera icon"></i>
                </a>
                <a className="item">
                    <i className="user icon"></i>
                </a>
            </div>
        )
    }
}
