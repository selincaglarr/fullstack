import React from "react";
import ContactInfo from "./../components/homeComponents/ContactInfo";
import Newsletter from "../components/homeComponents/Newsletter.js";
import Footer from "./../components/Footer";
import Slider from "./../components/homeComponents/Slider"
import Navbar from "../components/homeComponents/Navbar";
import Categories from "../components/homeComponents/Categories";
import BasicHeader from "../components/BasicHeader";


const HomeScreen = ({ match }) => {
  window.scrollTo(0, 0);
  const keyword = match.params.keyword;
  const pagenumber = match.params.pagenumber;
  return (
    <div>
      <BasicHeader/>
      <Slider/>
      <Categories/>
      <Newsletter />
      <ContactInfo />
      <Footer />
    </div>
  );
};

export default HomeScreen;
