import React, {Component} from 'react';
import './Section.css';

class Section extends Component {
  render() {
    return (
      <div className="Section">
        <h2 className="Section-Title">{this.props.sectionTitle}</h2>
        <p className="Section-Description">{this.props.sectionContent}</p>
      </div>
    );
  }
}

export default Section;