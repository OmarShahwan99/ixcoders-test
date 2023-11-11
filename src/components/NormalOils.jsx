import React from "react";
import Title from "./UI/Title";
import Card from "./UI/Card";
import Image from "../assets/oi.jpg";

const NormalOils = () => {
  return (
    <div className="container mx-auto py-6">
      <Title name="زيوت طبيعية" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <Card image={Image} name="زيت الحلبة" price={13500} />
        ))}
      </div>
    </div>
  );
};

export default NormalOils;
