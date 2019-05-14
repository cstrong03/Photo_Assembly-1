import React, { Component } from 'react'
import axios from 'axios'
import Faker from 'faker'

{/* <div><div className="ui placeholder">
    <div className="image fluid"></div>
</div>
    <input ref={fileInput => this.fileInput = fileInput} style={{ display: 'none' }} type="file" onChange={this.fileSelectHandle} />
    <button onClick={() => this.fileInput.click()}>Pick File</button>
    <button onClick={this.fileUploadHandle}>Add Pic</button>
</div> */}

export default class CreatePost extends Component {
    state = {
        selectedFile: null,
        placeholder: null
    }

    fileSelectHandle = event => {
        this.setState({
            selectedFile: event.target.files[0]
        })


    }

    fileUploadHandle = event => {
        const fd = new FormData();
        fd.append('image', this.state.selectedFile, this.state.selectedFile.name)
        axios.post('/create', fd, {
            onUploadProgress: progressEvent => {
                console.log(`Progress: ${Math.round(progressEvent.loaded / progressEvent.total * 100)}%`)
            }
        })
            .then(res => console.log(res))
    }

    render() {
        return (
            <div className="ui one column grid">
                <div className="column">
                    <div className="ui fluid card">
                        <div className="image">
                            <img alt="random" src="" className="ui fluid image" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}



