import React, { Component } from 'react'
import Post from './Post'
import { fetchPost } from '../services/api'
import Axios from 'axios';


export default class FeedView extends Component {
    render() {
        console.log(this.props.posts);
        return (
          <div className="ui one column grid">
            <div className="column">
              {this.props.posts.map((post, key) => (<Post post={post} key={key}/>))}
            </div>
          </div>
        );
    }
}
