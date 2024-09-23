import React from 'react'
import prdt1 from '../src/assets/n1.jpg';
import prdt2 from '../src/assets/n2.jpg';
import prdt3 from '../src/assets/n3.jpg';
import prdt4 from '../src/assets/n4.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping,faStar } from '@fortawesome/free-solid-svg-icons';

import "./index.css";

const NewArrivals = () => {
  return (
    <>
    <div className="featuredprdt">
      <h2 className="textalign fprdthead">New Arraivals</h2>
      <p className="textalign fprdtpara">Summer Collection New Modern Design</p>
    </div>
    <div className="prdtgrid">
      <div className="prdtcard">
        <div>
          <img src={prdt1} alt="featured-product" className="prdtimages" />
        </div>
        <div className="prdtsection2">
          <h4 className="prdtcompany">Basics</h4>
          <h2 className="prdtname">Plain Cotton Formal Shirt</h2>
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
                <FontAwesomeIcon icon={faCartShopping} className="prdtcart" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* sample mock */}
      <div className="prdtcard">
        <div>
          <img src={prdt2} alt="featured-product" className="prdtimages" />
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
                <FontAwesomeIcon icon={faCartShopping} className="prdtcart" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prdtcard">
        <div>
          <img src={prdt3} alt="featured-product" className="prdtimages" />
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
                <FontAwesomeIcon icon={faCartShopping} className="prdtcart" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="prdtcard">
        <div>
          <img src={prdt4} alt="featured-product" className="prdtimages" />
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
                <FontAwesomeIcon icon={faCartShopping} className="prdtcart" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default NewArrivals