import React, {Component} from 'react';
import './Chip.css';

class Chip extends Component {
  render() {
    return (
      <div className="Chip">
        <img className="circle" src={this.props.imageRoute} alt={this.props.man}/>
        <div className="rectangle">{this.props.man}</div>
      </div>
    );
  }
}

export default Chip;