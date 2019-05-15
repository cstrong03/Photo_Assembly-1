import React, { Component } from 'react'
// import createAPost from '../services/api'
import axios from 'axios'
import blankPic from '../assets/placeholder.png'



export default class CreatePost extends Component {
    state = {
        post: null,
        created: false,
        picture: blankPic,
        file: '',
        preview: false
    }

    handleImageChange(event) {
        event.preventDefault();

        let reader = new FileReader();
        let file = event.target.files[0];

        reader.onloadend = () => {
            this.setState({
                file: file,
                picture: reader.result,
                preview: true
            });
        }

        reader.readAsDataURL(file)
    }

    // fileUploadHandle = async event => {
    //     const fd = new FormData();
    //     fd.append('post', this.state.file, this.state.file.name)
    //     const post = await createAPost(this.state.post, {
    //         onUploadProgress: progressEvent => {
    //             this.setState({
    //                 post: post,
    //                 progress: Math.round(progressEvent.loaded / progressEvent.total * 100),
    //                 created: true
    //             })
    //         }
    //     })
    // }

    render() {

        return (
            <div className="ui one column grid">
                <div className="column">
                    <div className="ui fluid">
                        <div className="image">
                            <img alt="random" src={this.state.picture} className="ui fluid image" />
                            <input ref={fileInput => this.fileInput = fileInput} style={{ display: 'none' }} type="file" onChange={event => this.handleImageChange(event)} />
                            <div onClick={() => this.fileInput.click()} className="ui bottom attached button" tabIndex="0">Choose a Picture</div>
                        </div>
                        <div className="ui fluid  input">
                            <input type="text" placeholder="Write a caption..." />
                        </div>
                        <div>
                            {this.state.preview ? <button onClick={this.fileUploadHandle} className="fluid ui button">Add Post</button> : null}
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}



