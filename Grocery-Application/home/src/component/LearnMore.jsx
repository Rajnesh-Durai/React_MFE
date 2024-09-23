import React from "react";
import '../index.css'

const LearnMore = () => {
  return (
    <>
      <div className="container">
        <div className="learngrid">
          <div className="gridbg1">
            <h4 className="learnhead1">Crazy Deals</h4>
            <h2 className="learnhead3">Buy 1 Get 1 Free</h2>
            <p>The best classic dress is on sale at Cara</p>
            <button className="learnbtn">Learn More</button>
          </div>
          <div className="gridbg2">
            <h4 className="learnhead1">Spring/Summer</h4>
            <h2 className="learnhead3">Upcoming Seasons</h2>
            <p>The best classic dress is on sale at Cara</p>
            <button className="collectionbtn">Collections</button>
          </div>
        </div>
        <div className="learngrid">
          <div className="gridbg3">
            <h2 className="learnhead2">SEASONAL SALE</h2>
            <h4 className="learnhead4">Winter Collection-50% Off</h4>
          </div>
          <div className="gridbg4">
            <h2 className="learnhead2">NEW COLLECTIONS</h2>
            <h4 className="learnhead4">Spring/Summer 2023</h4>
          </div>
          <div className="gridbg5">
            <h2 className="learnhead2">T-SHIRTS</h2>
            <h4 className="learnhead4">New Trendy Prints</h4>
          </div>
        </div>
      </div>
    </>
  );
};

export default LearnMore;
