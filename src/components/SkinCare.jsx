import Image from "../assets/skin.jpg";
import Card from "./UI/Card";
import Title from "./UI/Title";

const SkinCare = () => {
  return (
    <div className="container mx-auto py-6">
      <Title name="العناية بالبشرة" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <Card image={Image} name="Feet Balm" price={40000} />
        ))}
      </div>
    </div>
  );
};

export default SkinCare;
