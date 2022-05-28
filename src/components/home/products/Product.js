import React from "react";
import { useStateValue } from "../../../services/StateProvider";
import "./Product.css";

function Product({ id, title, image, price, rating }) {
  const [state, dispatch] = useStateValue();

  const addToBasket = () => {
    //dispatch the item into the data layer
    dispatch({
      type: "ADD_TO_CART",
      item: {
        id,
        title,
        image,
        price,
        rating,
      },
    });
  };
  return (
    <div className="product" id={id} key={id}>
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((index, i) => (
              <p id={i} key={i}>
                ⭐
              </p>
            ))}
        </div>
      </div>
      <img src={image} alt="Product" />
      <button onClick={addToBasket}>Add to Cart</button>
    </div>
  );
}

export default Product;
