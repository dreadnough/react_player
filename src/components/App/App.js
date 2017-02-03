import React, { PropTypes, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classnames from 'classnames';
import ReactAudioPlayer from 'react-audio-player'
// import ReactPlayer from 'react-player';

class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          This is my first React app.
        </p>
        Nice music
        <div>        
          <ReactAudioPlayer
            src="test.mp3"
            autoPlay
            />
        </div>
        Nice music2
        <div>
          <ReactAudioPlayer
            src="test1.mp3"
            />
        </div>
        Nice music3
        <div>
          <ReactAudioPlayer
            src="test2.mp3"
            />
        </div>
      </div>
    );
  }
}

export default App;
