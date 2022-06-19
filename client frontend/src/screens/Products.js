import React from "react";
import BasicHeader from "./../components/BasicHeader";
import ShopSection from "./../components/homeComponents/ShopSection";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import Newsletter from "../components/homeComponents/Newsletter.js";
import Footer from "./../components/Footer";

const Products = ({ match }) => {
  return (
    <div>
      <BasicHeader />
      <ShopSection />
      <Newsletter />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default Products;
