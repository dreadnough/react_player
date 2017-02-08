import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Axios from 'axios';
import MusicPlayer from '../MusicPlayer/index';

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

export default class MusicList extends Component {
    constructor(props) {
        super(props);
        this.client_id = 'need  to wait for real client id';
        this.state = {
            musicList: [],
            title: '',
            index: ''
        }
    }

    componentDidMount() {
        this.setState({ musicList: songs });
        // let _this = this;
        // Axios.get(`https://api.soundcloud.com/playlists/test?client_id=${this.client_id}`)
        //     .then(function (response) {
        //         _this.setState({ musicList: response.data });
        //     })
        //     .catch(function (err) {
        //         console.log(err);
        //     });
    }

    handleSelect(title, index) {
        this.setState({title});
        this.setState({index});
    }

    render() {
        return (
            <div className="MusicList">
                <ul>
                    {this.state.musicList.map((music, index) => {
                        return (
                            <li onClick={this.handleSelect.bind(this, music.title, index)} key={index}>{music.title}</li>
                        )
                    })}
                </ul>
                <div>
                   <MusicPlayer index={this.state.index} songs={songs}/>
                </div>
            </div>
        )
    }


}