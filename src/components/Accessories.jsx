import Image from "../assets/acc.jpg";
import Card from "./UI/Card";
import Title from "./UI/Title";

const Accessories = () => {
  return (
    <div className="container mx-auto py-6">
      <Title name="إكسسوار" />
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 ">
        {[1, 2, 3, 4, 5, 6].map(() => (
          <Card image={Image} name="ساعة كارتير" price={240000} />
        ))}
      </div>
    </div>
  );
};

export default Accessories;
