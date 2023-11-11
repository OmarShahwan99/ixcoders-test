import Accessories from "./components/Accessories";
import Bags from "./components/Bags";
import Categories from "./components/Categories";
import Fragrances from "./components/Fragrances";
import Hero from "./components/Hero";
import Makeup from "./components/Makeup";
import NormalOils from "./components/NormalOils";
import SkinCare from "./components/SkinCare";
import Underwear from "./components/Underwear";
import Waxes from "./components/Waxes";
import Layout from "./layout/Layout";

const App = () => {
  return (
    <Layout>
      <div className="pb-16">
        <Categories />
        <Hero />
        <SkinCare />
        <Accessories />
        <Makeup />
        <Fragrances />
        <Bags />
        <NormalOils />
        <Underwear />
        <Waxes />
      </div>
    </Layout>
  );
};

export default App;
