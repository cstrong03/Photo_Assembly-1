import React, { Component } from "react";
import Comment from "./Comment";
import Faker from "faker";
import { deletePosts } from "../services/api"
import axios from 'axios'

export default class Post extends Component {
  // let image =

  deletePost = async (e, id) => {
      console.log("about to delete", this.props.post.id)
        // await deletePosts(this.props.post.id);
    await axios.delete(`http://localhost:4567/post/${this.props.post.id}`);
    console.log("deleted!")
  }

  render() {
    let { post, key } = this.props;
    let userName = Faker.name.firstName();

    let input = null;

    let insertInputField = () => {
      input = (
        <div className="ui large transparent left icon input">
          <i className="comment outline icon" />
          <input type="text" placeholder="Caption" />
        </div>
      );
    };

    return (
      <div className="ui fluid card">
        <div className="content">
          <div className="right floated meta">14h<button id="banana" onClick={e => this.deletePost(e)}>Delete</button></div>
          <img
            alt="random"
            className="ui avatar image"
            src={Faker.image.avatar()}
          />{" "}
          {userName}
        </div>
        <div className="image">
          <img alt="random" src={post.image_url} />
        </div>
        <div className="content">
          <span className="right floated">
            <i className="heart outline like icon" />
            {Faker.random.number()} likes
          </span>
          <i className="comment icon" />
          {Faker.random.number()} comments
          <div className="ui comments">
            <div className="comment">
              <div className="content">
                <a href="#" className="author">
                  {userName}
                </a>
                <div className="metadata">
                  <span className="date">Today at 5:42PM</span>
                </div>
                <div className="text">{post.caption}</div>
                <div class="actions">
                  <p onClick={insertInputField()} class="reply">
                    Edit Caption
                  </p>
                </div>
                {input}
              </div>
            </div>
          </div>
          <Comment />
        </div>
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
