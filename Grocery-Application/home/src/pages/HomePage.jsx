import React from "react";
import '../index.css'
import hero from "../assets/hero4.png";
import shop from "../assets/button.png";
import FeaturedProducts from 'ProductsMFE/FeaturedProducts'
import NewArrivals from 'ArrivalsMFE/NewArrivals'
import ExploreMore from "../component/ExploreMore";

const HomePage = () => {
  return (
    <>
      <div>
        <img src={hero} alt="HeroImage" className="hero" />
      </div>
      <div className="herotag">
        <h4 className="head1">Trade-in-offer</h4>
        <h2 className="head2">Super value deals</h2>
        <h1 className="head3">On all products</h1>
        <p className="para1">Save more with coupons & up to 70% off!</p>
        <button className="shopbtn">Shop Now</button>
        <div className="shopbg">
          <img src={shop} alt="shop-button" />
        </div>
      </div>
      <div>
        
        <FeaturedProducts />
        <ExploreMore/>
        <NewArrivals/>
      </div>
    </>
  );
};

export default HomePage;
