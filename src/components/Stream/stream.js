import React from 'react';
import Sound from 'react-sound';

class Stream extends React.Component {

render () {
    return (
        <div className="scotch_music">
          <Sound
           url={this.prepareUrl(this.state.track.stream_url)}
           playStatus={this.state.playStatus}
           onPlaying={this.handleSongPlaying.bind(this)}
           playFromPosition={this.state.playFromPosition}
           onFinishedPlaying={this.handleSongFinished.bind(this)}/>
        </div>
    );
}

}

export default Stream;