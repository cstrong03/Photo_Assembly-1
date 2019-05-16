import React, { Component } from 'react';
import { updatePosts } from '../services/api'

class UpdatePosts extends Component{
  constructor(props){
    super(props);

    this.state = {
      posts: [],
      updated: false
    }
  }
  onUpdateChange = async(event)=>{
    const element = event.target
    const name = element.name
    const value = element.value

    console.log(this.state);

    await this.setState(state => {
      return {
        ...state,
        'caption': { ...state.caption, [name]: value }
      }
    })
  }


  onUpdateSubmit = async (event) => {
    event.preventDefault()

    console.log(`Form submitted: `, this.props.nameofprop)

    let refreshFeed = {
      caption: this.state.caption
    }

    console.log(refreshFeed)

    const news = await refreshFeed(this.props.currentCaption.id, refreshFeed)

    this.setState({
      caption: caption,
      updated: true
    })

    console.log(this.props)
  }
}
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
