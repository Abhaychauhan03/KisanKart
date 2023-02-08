import React from "react";
import { useHistory } from "react-router-dom";
import "./Product.css";
import { useStateValue } from "./Stateprovider";

function Product({ id, title, image, price, rating }) {
  const [{ basket }, dispatch] = useStateValue();
  const history = useHistory();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>₹</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p>⭐</p>;
            })}
        </div>
      </div>

      <img src={image} alt="product" />
      <button onClick={addToBasket}>Add to Basket</button>
    </div>
  );
}

export default Product;
