import React from 'react';
import './Card.css';
import profilePic from './imgs/profile.jpg';
import statusPic from './imgs/status.png'
import Button from './Button.js';

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      numReplies: 3,
      numShare: 27,
      shareClicked: false,
      numLikes: 109,
      likesClicked: false,
    };
  }

  render() {
    return (
      <div className="Card">
        <div id="Header">
          <img id="profilePic" src={profilePic} />



        </div>
        <div id="Status">
          <img id="statusPic" src={statusPic} />
        </div>
        <div id="Footer">

          <Button />
        
        </div>
      </div>
    );
  }
}

export default Card;