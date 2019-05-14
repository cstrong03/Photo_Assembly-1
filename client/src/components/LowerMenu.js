import React, { Component } from 'react'

export default class LowerMenu extends Component {
    render() {
        return (
            <div class="ui bottom fixed three item  massive menu">
                <a class="item">
                    <i class="home icon"></i>
                </a>
                <a class="item">
                    <i class="plus square outline camera icon"></i>
                </a>
                <a class="item">
                    <i class="user icon"></i>
                </a>
            </div>
        )
    }
}
