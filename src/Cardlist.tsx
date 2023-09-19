import React from "react";
import Card from "./card";
import stafflist from "./stafflist";
import { Button } from "semantic-ui-react";
import "./card.css";

interface Staff {
  key: number;
  avatar: string;
  name: string;
  position: string;
  rating: number;
}

const CardList: React.FC = () => {
  return (
    <div>
      <div className="row">
        {stafflist.map((staff: Staff) => (
          <Card
            key={staff.key}
            avatar={staff.avatar}
            name={staff.name}
            position={staff.position}
            rating={staff.rating}
          />
        ))}
      </div>
      <button className="ui button">See More</button>
    </div>
  );
};

export default CardList;
