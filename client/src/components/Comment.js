import React, { Component } from 'react'
import Faker from 'faker';

export default class Comment extends Component {
    render() {
        let userName = Faker.name.firstName()
        return (
            <div className="ui comments">
                <div className="comment">
                    <div className="content">
                        <a href="#" className="author">{userName}</a>
                        <div className="metadata">
                            <span className="date">Today at 5:42PM</span>
                        </div>
                        <div className="text">
                            How artistic!
                                    </div>
                    </div>
                </div>
            </div>
        )
    }
}
