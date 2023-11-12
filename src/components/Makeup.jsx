import React from "react";

import Image from "../assets/mk.jpg";
import GridSection from "./UI/GridSection";

const Makeup = () => {
  return (
    <GridSection
      title="مكياج"
      image={Image}
      name="ايشادو فولاريه 10"
      price={24000}
    />
  );
};

export default Makeup;
