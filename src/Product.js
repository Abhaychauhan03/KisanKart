import React from "react";
import { useNavigate } from "react-router-dom";
import "./Product.css";
import { useStateValue } from "./Stateprovider";

function Product({ id, title, image, price, rating, size }) {
  const [{ basket }, dispatch] = useStateValue();
  const navigate = useNavigate();

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
    <div
      className="product__container"
      style={size === "lg" ? { width: "100%" } : { width: "300px" }}
    >
      <div className="product">
        <div
          className="product__img"
          onClick={() => {
            navigate("/product", {
              state: {
                id: id,
                title: title,
                image: image,
                price: price,
                rating: rating,
              },
            });
          }}
        >
          <img src={image} alt="product" />
        </div>
        <div className="product__desc">
          <div className="product__desc__details">
            <p>{title}</p>
            <p className="product__price">
              <small>₹</small>
              <strong>{price}</strong>
            </p>
          </div>
          <span className="product__desc__info">
            This is the dummy product description
          </span>

          <div className="product__rating">
            {Array(rating)
              .fill()
              .map((_, i) => {
                return <p>⭐</p>;
              })}
          </div>

          <button className="add__btn" onClick={addToBasket}>
            Add to Basket
          </button>
        </div>
      </div>
    </div>
  );
}

export default Product;
