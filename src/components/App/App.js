import React, { PropTypes, Component } from 'react';
import logo from './logo.svg';
import './App.css';
import classnames from 'classnames';
// import ReactAudioPlayer from 'react-audio-player';
// import Stream from '../Stream/stream';
 import MusicPlayer from '../MusicPlayer/index';
 import MusicList from '../MusicList/index';


class App extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('App', className)} {...props}>
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <MusicPlayer/>
        <MusicList/>
      </div>
    );
  }
}

export default App;
