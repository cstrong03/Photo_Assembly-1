import React, { Component } from 'react'
import Faker from 'faker';
import Post from './Post'
import { Redirect } from 'react-router-dom'

export default class Profile extends Component {

    logoutUser = () => {
        localStorage.clear();
        this.props.editToken(null)
    }


    render() {
        let userName = Faker.name.firstName();
        let redirect = this.props.token === null ? <Redirect to="/" /> : null
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
                            <div className="ui circular image">
                                <img src={Faker.image.avatar()} />
                            </div>
                            <div className="content">
                                <a className="header">{userName}</a>
                                <div className="meta">
                                    <span className="cinema">insert website here</span>
                                </div>
                                <div className="description">
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga aperiam
                                        soluta molestiae excepturi nostrum veniam ea quos eligendi blanditiis veritatis facere
                                        doloribus, odio totam. Veniam sint est vero mollitia cupiditate!</p>
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

                        <div className="ui fluid column image">
                            <img alt="random" src={Faker.image.image()} />
                        </div>
                        <div className="ui fluid column image">
                            <img alt="random" src={Faker.image.image()} />
                        </div>
                        <div className="ui fluid column image">
                            <img alt="random" src={Faker.image.image()} />
                        </div>
                        <div className="ui fluid column image">
                            <img alt="random" src={Faker.image.image()} />
                        </div>
                        <div className="ui fluid column image">
                            <img alt="random" src={Faker.image.image()} />
                        </div>
                        <div className="ui fluid column image">
                            <img alt="random" src={Faker.image.image()} />
                        </div>
                        <div className="ui fluid column image">
                            <img alt="random" src={Faker.image.image()} />
                        </div>
                        <div className="ui fluid column image">
                            <img alt="random" src={Faker.image.image()} />
                        </div>
                        <div className="ui fluid column image">
                            <img alt="random" src={Faker.image.image()} />
                        </div>
                        <div className="ui fluid column image">
                            <img alt="random" src={Faker.image.image()} />
                        </div>
                        <div className="ui fluid column image">
                            <img alt="random" src={Faker.image.image()} />
                        </div>
                        <div className="ui fluid column image">
                            <img alt="random" src={Faker.image.image()} />
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
