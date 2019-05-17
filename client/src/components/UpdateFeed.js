import React, { Component } from 'react';
import { updatePosts } from '../services/api'

class UpdatePosts extends Component{
  render(){
    return(
      <div>
      <form onSubmit={this.onRestaurantFormSubmit}>
        <div>
          <label htmlFor="name">Caption</label>
          <input
          id="name"
          type="text"
          name="name"
          onChange={this.onRestaurantFormSubmit}
          placeholder="Write new caption here"/>
        </div>

        <div>
          <button type="submit">Edit Post</button>
        </div>
        </form>
      </div>
    )
  }
}

export default UpdatePosts
