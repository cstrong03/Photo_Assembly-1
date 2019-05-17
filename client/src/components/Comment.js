import React, { Component } from 'react'
import Faker from 'faker';

export default class Comment extends Component {
    render() {
        console.log(this.props.comment);
        return (
            <div className="ui comments">
                <div className="comment">
                    <div className="content">
                        <a href="#" className="author">{this.props.comment.user.username}</a>
                        <div className="metadata">
                            <span className="date">{this.props.comment.createdAt}</span>
                        </div>
                        <div className="text">
                            {this.props.comment.comment}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
