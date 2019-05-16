import React, { Component } from 'react'
import Comment from './Comment'
import Faker from 'faker';

export default class Post extends Component {
    render() {
        let userName = Faker.name.firstName();
        return (
            <div className="ui fluid card">
                <div className="content">
                    <div className="right floated meta">14h</div>
                    <img alt="random" className="ui avatar image" src={Faker.image.avatar()} /> {userName}
                </div>
                <div className="image">
                    <img alt="random" src={Faker.image.image()} />
                </div>
                <div className="content">
                    <span className="right floated">
                        <i className="heart outline like icon"></i>
                        {Faker.random.number()} likes
                            </span>
                    <i className="comment icon"></i>
                    {Faker.random.number()} comments
                            <div className="ui comments">
                        <div className="comment">
                            <div className="content">
                                <a href="#" className="author">{userName}</a>
                                <div className="metadata">
                                    <span className="date">Today at 5:42PM</span>
                                </div>
                                <div className="text">
                                    This is Where the Caption Will Go!!
                                    </div>
                            </div>
                        </div>
                    </div>
                    <Comment />
                </div>
                <div className="extra content">
                    <div className="ui large transparent left icon input">
                        <i className="comment outline icon"></i>
                        <input type="text" placeholder="Add Comment..." />
                    </div>
                </div>
            </div>
        )
    }
}
