import React from "react";
import Image from "../assets/welcome.jpg";
const Hero = () => {
  return (
    <div className="py-6 container mx-auto">
      <img className="object-cover" src={Image} />
    </div>
  );
};

export default Hero;
