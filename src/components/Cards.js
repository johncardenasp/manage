import React from 'react';
import './styles/Cards.css';

class Card extends React.Component {
  constructor(props) {
    super(props); 
    this.number = props.number;
    this.title = props.title;
    this.description = props.description;
  }

  render() {
    return (
    <div className="card">
      <div className="card__number">
        <span>{this.props.number}</span>
      </div>
      <div className="card__title">
        <h3>{this.props.title}</h3>
      </div>
      <div className="card__description">
        <p>{this.props.description}</p>
      </div>
    </div>
    )
  }
}

export default Card;