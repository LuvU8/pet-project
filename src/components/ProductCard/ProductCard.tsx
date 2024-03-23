import React from "react";
import CardButton from "../CardButton/CardButton";
import WishlistButton from "../WishlistButton/WishlistButton";
import "../../App.css";
import image from "../../assets/hoodie.jpg";


const ProductCard = () => {
  return (
    <div className="product-card">
      <img src={image} alt="hoodie" />
      <div className="card-info">
        <h3>LIBERTY HOODIE</h3>
        <div className="card-prices">
          <p className="actual-price">4490₽</p>
          <p className="old-price">5490₽</p>
        </div>
      </div>
      <div className="card-buttons">
        <CardButton label="Add to cart" color="basic" size="large" />
        <WishlistButton fillColor="#dedede" strokeColor="#bebebe"/>
      </div>
      <p className="card-sizes">XS, S, M, L</p>
    </div>
  );
};

export default ProductCard;
