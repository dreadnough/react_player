import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

export default class Music1 extends Component {

    render() {
        const{className,...props}=this.props;
        return (
            <div className={classnames('Music', className)}{...props}>
                <audio class="myAudio" src={this.props.name} autoplay controls />
            </div>
        )
    }

}

