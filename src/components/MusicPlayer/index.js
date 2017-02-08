import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Axios from 'axios';

import Sound from 'react-sound';

import Details from '../MusicPlayerComponents/details';
import Player from '../MusicPlayerComponents/player';
import Progress from '../MusicPlayerComponents/progress';
import Footer from '../MusicPlayerComponents/footer';


let songs = [{
  "stream_url": 'http://tegos.kz/new/mp3_full/Redfoo_-_New_Thang.mp3',
  "title": "New Thang"
},
{
  "stream_url": 'http://a.tumblr.com/tumblr_lpoc6cHNDP1r0jthjo1.mp3',
  "title": "99 Problems"
},
{
  "stream_url": 'http://claymore.france.free.fr/momo/summer love.mp3',
  "title": "Summer Love"
},
{
  "stream_url": 'http://a.tumblr.com/tumblr_mlyactVSyX1qejx3lo1.mp3',
  "title": "Get Lucky"
},
{
  "stream_url": 'http://a.tumblr.com/tumblr_lxe7hpIUPA1r3ne4ro1.mp3',
  "title": "Feeling Good"
},
{
  "stream_url": 'http://midnightoilco.net/sitebuildercontent/sitebuilderfiles/metallicafuel.mp3',
  "title": "Fuel"
}
];


export default class Music extends Component {
  constructor(props) {
    super(props);
    this.client_id = 'need  to wait for real client id';
    this.state = {
      track: { stream_url: '', title: '', artwork_url: '' },
      musicList: [],
      playStatus: Sound.status.STOPPED,
      elapsed: '00:00',
      total: '00:00',
      position: 0,
      playFromPosition: 0,
      autoCompleteValue: '',
      currentSong: 0,
      title: '',
      index: ''
    }
  }

  componentDidMount() {
    this.setState({ musicList: songs });
    this.randomTrack();
  }

  prepareUrl(url) {
    // Attach client id to stream url
    return `${url}?client_id=${this.client_id}`
  }

  xlArtwork(url) {
    return url.replace(/large/, 't500x500');
  }

  togglePlay() {
    // Check current playing state
    if (this.state.playStatus === Sound.status.PLAYING) {
      // Pause if playing
      this.setState({ playStatus: Sound.status.PAUSED })
    } else {
      // Resume if paused
      this.setState({ playStatus: Sound.status.PLAYING })
    }
  }
  stop() {
    // Stop sound
    this.setState({ playStatus: Sound.status.STOPPED });
  }

  forward() {
    this.setState({ playFromPosition: this.state.playFromPosition += 1000 * 10 });
  }

  backward() {
    this.setState({ playFromPosition: this.state.playFromPosition -= 1000 * 10 });
  }

  // handleSelect(value, item) {
  //   this.setState({ autoCompleteValue: value, track: item });
  // }

  handleSongPlaying(audio) {
    this.setState({
      elapsed: this.formatMilliseconds(audio.position),
      total: this.formatMilliseconds(audio.duration),
      position: audio.position / audio.duration
    })
  }

  formatMilliseconds(milliseconds) {
    // Format hours
    var hours = Math.floor(milliseconds / 3600000);
    milliseconds = milliseconds % 3600000;

    // Format minutes
    var minutes = Math.floor(milliseconds / 60000);
    milliseconds = milliseconds % 60000;

    // Format seconds
    var seconds = Math.floor(milliseconds / 1000);
    milliseconds = Math.floor(milliseconds % 1000);

    // Return as string
    return (minutes < 10 ? '0' : '') + minutes + ':' +
      (seconds < 10 ? '0' : '') + seconds;
  }

  handleSongFinished() {
    this.nextTrack();
  }

  nextTrack() {
    let currentSong = this.state.currentSong + 1;
    if ((songs.length - 1) < currentSong) {
      currentSong = 0;
    }
    this.setState({ track: songs[currentSong] });
    this.setState({ currentSong })

  }

  randomTrack() {
    // console.log('here');
    // let _this = this;
    // Axios.get(`https://api.soundcloud.com/playlists/test?client_id=${this.client_id}`)
    //   .then(function (response) {
    //     const trackLength = response.data.tracks.length;
    //     const randomNumber = Math.floor((Math.random() * trackLength) + 1);
    //     // Set the track state with a random track from the playlist
    //     _this.setState({ track: response.data.tracks[randomNumber] });
    //   })
    //   .catch(function (err) {
    //     console.log(err);
    //   });
    const songsLength = songs.length;
    const randomNumber = Math.floor((Math.random() * songsLength) + 1);
    this.setState({ track: songs[0] });

  }

  changeMusic() {
    this.setState({ track: songs[this.state.index || 0] });
  }


  handleSelect(index) {
    this.setState({ track: songs[index] });
  }


  render() {
    return (
      <div className="music">
        <div>
          <ul>
            {this.state.musicList.map((music, index) => {
              return (
                <li onClick={this.handleSelect.bind(this, index)} key={index}>{music.title}</li>
              )
            })}
          </ul>
        </div>
        <Details
          title={this.state.track.title} />
        <Sound
          url={this.prepareUrl(this.state.track.stream_url)}
          playStatus={this.state.playStatus}
          onPlaying={this.handleSongPlaying.bind(this)}
          playFromPosition={this.state.playFromPosition}
          onFinishedPlaying={this.handleSongFinished.bind(this)} />
        <Player
          togglePlay={this.togglePlay.bind(this)}
          stop={this.stop.bind(this)}
          playStatus={this.state.playStatus}
          forward={this.forward.bind(this)}
          backward={this.backward.bind(this)}
          random={this.randomTrack.bind(this)} />
        <Progress
          elapsed={this.state.elapsed}
          total={this.state.total}
          position={this.state.position} />
        <Footer />
      </div>
    );
  }
}

