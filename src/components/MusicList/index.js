import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';
import Axios from 'axios';

export default class MusicList extends Component {
    constructor(props) {
        super(props);
        this.client_id = 'need  to wait for real client id';
        this.state = {
            musicList: []
        }
    }

    componentDidMount() {
        console.log('here 2');
        let _this = this;
        Axios.get(`https://api.soundcloud.com/playlists/test?client_id=${this.client_id}`)
            .then(function (response) {
                _this.setState({ musicList: response.data });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    render() {
        return (
            <ul className="MusicList">
            {this.state.musicList.map(function(music){
                return(
                    <li key={music.title}>{music.title}</li>
                )
            })}

            </ul>
        )
    }


}