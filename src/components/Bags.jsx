import React from "react";
import Card from "./UI/Card";
import Title from "./UI/Title";
import Image from "../assets/bg.jpg";

const Bags = () => {
  return (
    <div className="container mx-auto py-6">
      <Title name="حقيبة" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <Card image={Image} name="حقيبة كريستال مموجة" price={150000} />
        ))}
      </div>
    </div>
  );
};

export default Bags;
