import React, { Component } from 'react'
// import createAPost from '../services/api'
import axios from 'axios'
import blankPic from '../assets/placeholder.png'
import { uploadStuff } from '../services/api'
import ReactS3 from 'react-s3'
import { uploadFile } from 'react-s3'

const accessKey = process.env.AWSSecretKey
const accessKeyId = process.env.AWSAccessKeyId
const config = {
    secretAccessKey: accessKey,
    accessKeyId: accessKeyId,
    region: 'us-east-1',
    bucketName: 'photo-assembly'
  }

export default class CreatePost extends Component {
    state = {
        post: null,
        created: false,
        picture: blankPic,
        file: '',
        preview: false,
        imageLink: ''
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
    
    

    // uploadFiles = (e) => {
    //     e.preventDefault()
    //     // console.log(this.state.file)
    //     // uploadStuff({"image": this.state.file})
    //     uploadFile(this.state.file, config)
    //     .then ((data) => {
    //         console.log(data)
    //     }) .catch((err) => {
    //         console.log(err)
    //     })

    // }


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
    }

    // handleFileUpload = (event) => {
    //     this.setState({file: event.target.files});
    // }

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
                                <input type="text" placeholder="Write a caption..." />
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



