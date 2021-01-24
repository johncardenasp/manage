import React from 'react';

import './styles/Opinions.css';


class Opinion extends React.Component {
  constructor(props) {
    super(props);
    this.image = props.image;
    this.name = props.name;
    this.blockquote = props.blockquote;
  }

  render() {
    return (
      <div className="opinions__card">
        <figure>
          <img src={this.props.image} alt={`${this.props.name} Avatar`} />
        </figure>
        <h4>{this.props.name}</h4>
        <blockquote>"{this.props.blockquote}"</blockquote>
      </div>
    )
  }

}

export default Opinion;