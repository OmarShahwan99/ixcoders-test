import Header from "./Header";
import WhatsappOrder from "./WhatsappOrder";

const Layout = ({ children }) => {
  return (
    <>
      <Header />

      {children}
      <WhatsappOrder />
    </>
  );
};

export default Layout;
