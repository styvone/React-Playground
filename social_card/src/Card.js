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
      replyIcon: "glyphicon glyphicon-comment",

      numShare: 27,
      shareIcon: "glyphicon glyphicon-retweet",
      shareClicked: false,

      numLikes: 109,
      falseLike: "glyphicon glyphicon-heart-empty",
      trueLike: "glyphicon glyphicon-heart",
      likesClicked: false,

      messageIcon: "glyphicon glyphicon-envelope",
    };
  }

  render() {
    var likeIcon = this.state.likesClicked ? this.state.trueLike : this.state.falseLike;
    return (
      <div className="Card">
        <div id="Header">
          <img id="profilePic" src={profilePic} />



        </div>
        <div id="Status">
          <img id="statusPic" src={statusPic} />
        </div>
        <div id="Footer">
          <Button value={this.state.numReplies} icon={this.state.replyIcon}/>
          <Button value={this.state.numShare} icon={this.state.shareIcon} />
          <Button value={this.state.numLikes} icon={likeIcon} />
          <Button icon={this.state.messageIcon} />
        </div>
      </div>
    );
  }
}

export default Card;