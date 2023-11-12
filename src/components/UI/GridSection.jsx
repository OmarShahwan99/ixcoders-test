import React from "react";
import Title from "./Title";
import Card from "./Card";

const GridSection = (props) => {
  return (
    <div className="container mx-auto py-6">
      <Title name={props.title} />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <Card image={props.image} name={props.name} price={props.price} />
        ))}
      </div>
    </div>
  );
};

export default GridSection;
