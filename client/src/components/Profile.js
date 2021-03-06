import React, { Component } from 'react'
import Faker from 'faker';
import Post from './Post'
import { Redirect } from 'react-router-dom'
import { getAUser, getAUsersPosts } from '../services/api'
import blankAvatar from "../assets/blankuser.jpg"


export default class Profile extends Component {
    constructor() {
        super()
        this.state = {
            userData: {}
        }
    }
    
    logoutUser = () => {
        localStorage.clear();
        this.props.editToken(null)
    }

    
    componentDidMount = async () => {
        // const usersPosts =  await getAUsersPosts(this.props.userId)
        // console.log(usersPosts)
        console.log(this.state.posts)
        const something = await getAUser(this.props.userId)
        this.setState({
            userData: something
        })

        console.log(this.state.userData)
    }

    render() {

        console.log(this.props.filteredPosts)

        let userName = Faker.name.firstName();
        let redirect = this.props.token === null ? <Redirect to="/" /> : null
        let { userData } = this.state
        let avatar = userData.avatar || blankAvatar


        return (
            <div>
                {redirect}
                <div className="ui secondary pointing menu">
                    <a className="active item">Home</a>
                    <a className="item">Followers</a>
                    <a className="item">Following</a>
                    <div className="right menu">
                        <a onClick={this.logoutUser} className="ui item">Logout</a>
                    </div>
                </div>
                <div className="ui fluid bottom attached segment">
                    <div className="ui divided items">
                        <div className="item">
                            <div className="ui small circular image">
                                <img src={avatar} />
                            </div>
                            <div className="content">
                                <p className="header">{userData.username}</p>
                                <div className="meta">
                                    <span className="cinema">{userData.homepage}</span>
                                </div>
                                <div className="description">
                                    <p>{userData.description}</p>
                                </div>
                                <div className="extra">
                                    <div className="ui right floated primary button">
                                        Follow <i className="right chevron icon"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ui three column grid">
                        {this.props.filteredPosts.map((post, index) => 
                        <div className="ui fluid column image">
                            <img alt="random" src={post.image_url} />
                        </div>)}
                    
                    </div>
                </div>
            </div>
        )
    }
}
