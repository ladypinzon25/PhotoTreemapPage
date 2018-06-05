import React, {Component} from 'react';
import './Media.css';

class Media extends Component {
  render() {
    return (
      <div className={"Media "+this.props.className}>
        <h2 className="mediaTitle">{this.props.mediaTitle}</h2>
        <img className="Media-Image" src={this.props.mediaImage}/>
        <div className="Media-Button-Container">
          {this.props.actions.map((event, i) => {
            return (
              <a key={i} className="Media-Button" href={event.link}>{event.name}</a>
            )
          })}
        </div>
      </div>
    );
  }
}

export default Media;