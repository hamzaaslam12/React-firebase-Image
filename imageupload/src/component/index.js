import React, { Component } from 'react';
import { storage } from '../firebase/config'
import '../App.css';

class FileUpload extends Component {
  constructor() {
    super();
    this.state = {
      img: null,
      url: ''
    }
  }

  handle = e => {
    // console.log(e.target.files[0])
    this.setState({
      img: e.target.files[0],
      url: '',
      progress: 0,
    })
    // console.log(this.state)
  }

  uploadImg = () => {
    const { img } = this.state;

    const upload = storage.ref(`images/${img.name}`).put(img)
    upload.on('state_changed',

      // progerss parameter
      (snapshot) => {
        const progress = Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
        this.setState({ progress });
      },

      // error parameter
      (error) => { console.log(error) },

      // completed parameter: save image nd retrive it
      () => {
        storage.ref('images').child(img.name).getDownloadURL().then(url => {
          console.log(url)
          this.setState({ url })
        })
      });
  }

  render() {
    const style = {
      height: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    };

    return (
      <div style={style}>
        <h1>HELLO WORLD</h1>
        <br />

        <progress value={this.state.progress} max="100" />
        <br />

        <input type="file" onChange={this.handle} />
        <br />
        <button onClick={this.uploadImg}>UPLOAD FILE</button>
        <br />

        {this.state.url ? (

          <img src={this.state.url} alt="Uploaded images" height="300" width="400" />

        ) : (<h3>PLAEASE SELECT ANY IMAGE</h3>)
        }

      </div>
    );
  }
}

export default FileUpload;
