
import React, { Component } from 'react'
import axios from 'axios'
import blankPic from '../assets/placeholder.png'



export default class CreatePost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imagePreviewUrl: null,
            file: null
        };
    }



    fileSelectHandle = event => {
        console.log(event.target.files[0])
        this.setState({
            selectedFile: event.target.files[0],
            picture: event.target.files[0],
        })
    }

    handleImageChange(e) {
        e.preventDefault();

        let reader = new FileReader();
        let file = e.target.files[0];

        reader.onloadend = (file) => {
            console.log(file)
            this.setState({
                file: file,
                imagePreviewUrl: reader.result
            });
        }
        reader.readAsDataURL(file)
    }

    fileUploadHandle = event => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
        axios.post('/create', fd, {
            onUploadProgress: progressEvent => {
                this.setState({ progress: Math.round(progressEvent.loaded / progressEvent.total * 100) })
            }
        })
            .then(res => console.log(res))
    }

    render() {
        let { imagePreviewUrl } = this.state;
        let $imagePreview = null;
        if (imagePreviewUrl) {
            $imagePreview = (<img src={imagePreviewUrl} />);
        } else {
            $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);
        }




        return (
            <div className="ui one column grid">
                <div className="column">
                    <div className="ui fluid">
                        <div className="image">
                            <img alt="random" src={this.state.imagePreviewUrl} className="ui fluid image" />
                            <div className="ui bottom attached progress" data-percent={this.state.progress}>
                                <div className="bar"></div>
                            </div>
                            <input ref={fileInput => this.fileInput = fileInput} style={{ display: 'none' }} type="file" onChange={(e) => this.handleImageChange(e)} />
                            <div onClick={() => this.fileInput.click()} className="ui bottom attached button" tabIndex="0">Choose a Picture</div>
                        </div>
                        <div className="ui fluid  input">
                            <input type="text" placeholder="Write a caption..." />
                        </div>
                        <div>
                            <button onClick={this.fileUploadHandle}>Add Pic</button>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}



