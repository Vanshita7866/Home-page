import React from "react";
import { Rating } from "semantic-ui-react";
import "./card.css";

interface CardProps {
  avatar: string;
  name: string;
  position: string;
  rating: number;
}

const card: React.FC<CardProps> = (props) => {
  return (
    <div className="container">
      <div className="card">
        <img src={props.avatar} alt="staff" />
        <h3>{props.name}</h3>
        <p>{props.position}</p>
        <Rating
          icon="star"
          defaultRating={props.rating}
          maxRating={5}
          disabled
        />
      </div>
    </div>
  );
};

export default card;
