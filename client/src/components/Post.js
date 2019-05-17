import React, { Component } from 'react'
import Comment from './Comment'
import Faker from 'faker';
import { updatePosts } from '../services/api'
import axios from 'axios'

export default class Post extends Component {
  deletePosting = async (e, id) => {
      console.log("about to delete", this.props)
   await axios.delete(`http://localhost:4567/post/${this.props.post.id}`);
   this.props.deletePost(this.props.id)
    console.log("deleted!")

  }
  onUpdate = (event)=>{
    event.preventDefault()
    console.log(event.target.name.id);
    updatePosts(event.target.name.id, {caption:event.target.name.value})
  }
  render() {
    let { post } = this.props;
    let userName = Faker.name.firstName();
    let input = null;

        let insertInputField = ()=>{
            input = (
                <form onSubmit={this.onUpdate}  className="ui large transparent left icon input">
                    <i className="comment outline icon"></i>
                    <input name='name' id={post.id}
                     type="text" placeholder="Caption" />
                    <button>Edit</button>
                </form>
            )
        }


        return (
            <div className="ui fluid card">
                <div className="content">
                    <div className="right floated meta">14h{this.props.isLoggedIn ? <button id="banana" onClick={e => this.deletePosting(e)}>Delete</button> : null}
                    </div>
                    <img alt="random" className="ui avatar image" src={Faker.image.avatar()} /> {userName}
                </div>
                <div className="image">
                    <img alt="random" src={post.image_url} />
                </div>
                <div className="content">
                    <span className="right floated">
                    <i className="heart outline like icon" />
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
                                    {post.caption}
                                    </div>
                                    <div class="actions">
                                </div>{input}
                            </div>
                        </div>
                    </div>
                    <Comment />

                </div>
                {this.props.isLoggedIn ?
                <div>
                <div className="text">{post.caption}</div>
                <div class="actions">
                  <p onClick={insertInputField()} class="reply">
                    Edit Caption
                  </p>
                </div>
                </div>
                : null}
                {input}
            <Comment />
          <div className="extra content">
          <div className="ui large transparent left icon input">
            <i className="comment outline icon" />
            <input type="text" placeholder="Add Comment..." />
          </div>
        </div>
        </div>

    );
  }
}
