import React from 'react'
import prdt1 from "./assets/f1.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import './index.css'
const Shop = () => {
  return (
    <>
    <div className="shopsection1">
      <div className="section1bg">
        <h2>#StayHome</h2>
        <h4>Save more with coupons upto 70% Off</h4>
      </div>
    </div>
    <div className="shopsection2">
      <div className="prdtgrid">
        <div className="prdtcard">
          <div>
            <img src={prdt1} alt="featured-product" className="prdtimages" />
          </div>
          <div className="prdtsection2">
            <h4 className="prdtcompany">adidas</h4>
            <h2 className="prdtname">Cartoon Astronaut T-Shirt</h2>
            <div className="prdtflex">
              <div>
                <div>
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <FontAwesomeIcon icon={faStar} className="star" />
                  <FontAwesomeIcon icon={faStar} className="star" />
                </div>
                <div className="prdtprice">$78</div>
              </div>
              <div className="cartbg">
                <div>
                  <FontAwesomeIcon
                    icon={faCartShopping}
                    className="prdtcart"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Shop