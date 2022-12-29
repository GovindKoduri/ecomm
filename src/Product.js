import React from "react";
import { useDispatch } from "react-redux";

import { cartActions } from "./store/cart-slice";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const dispatch = useDispatch();
  
  const addToBasket = () => {
    console.log("Add to Basket called !!!")
    dispatch(cartActions.addItemsToCart({ // new style js assignment if both field names are same
      id,
      title,
      image,
      price,
      rating
    }));
  }

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <p>⭐</p>
            ))}
        </div>
      </div>

      <img src={image} alt=""/>

      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
