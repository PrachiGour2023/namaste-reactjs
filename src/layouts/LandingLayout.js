import React from "react";
import Header from "./components/landing/Header";
import FoodContent from "./components/landing/FoodContent";
import Footer from "./components/landing/Footer";

function LandingLayout() {
  return (
    <div>
      <Header />
      <FoodContent />
      <Footer />
    </div>
  );
}

export default LandingLayout;
