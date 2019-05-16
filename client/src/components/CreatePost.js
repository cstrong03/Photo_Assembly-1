import React, { Component } from 'react'
import { createAPost } from '../services/api'
import axios from 'axios'
import blankPic from '../assets/placeholder.png'

export default class CreatePost extends Component {
    state = {
        post: null,
        created: false,
        picture: blankPic,
        file: '',
        preview: false,
        imageLink: '',
        caption: ''
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

    submitFile = async (e) => {
        e.preventDefault();
        const formData = await new FormData();
        await formData.append('image', this.state.file);
        await axios.post(`http://localhost:4567/image-upload`, formData, {
        headers: {
            'Content-Type': 'image/jpeg',
            "x-amz-meta-fieldname": "image"
        }
        }).then(response => {
            console.log(response.data.imageUrl)
            this.setState({
                imageLink: response.data.imageUrl
            })
            console.log(this.state.imageLink)
        // handle your response;
        }).catch(error => {
            console.log(error)
        // handle your error
        });

        let makeAPost = {
            "image_url": this.state.imageLink,
            "caption": this.state.caption
        }
        const post = await createAPost(makeAPost)
        console.log(post)
        this.setState({
            created: true
        })
    }

    onFormChange = (event) => {
        console.log(event.target.value)
        const { value } = event.target;
        this.setState({caption: value})
    }

    render() {

        return (
            <div className="ui one column grid">
                <div className="column">
                    <form onSubmit={(e) => this.submitFile(e)}>
                        <div className="ui fluid">
                            <div className="image">
                                <img alt="random" src={this.state.picture} className="ui fluid image" />
                                <input ref={fileInput => this.fileInput = fileInput} style={{ display: 'none' }} type="file" onChange={event => this.handleImageChange(event)} />
                                <div onClick={() => this.fileInput.click()} className="ui bottom attached button" tabIndex="0">Choose a Picture</div>
                            </div>
                            <div className="ui fluid  input">
                                <input type="text" value={this.state.caption} onChange={(e) => this.onFormChange(e)} placeholder="Write a caption..." />
                            </div>
                            <div>
                                {this.state.preview ? <button onClick={this.fileUploadHandle} className="fluid ui button" type="submit">Add Post</button> : null}
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}



