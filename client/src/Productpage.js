import React from "react";
import { useLocation } from "react-router-dom";
import "./Productpage.css";
import { useStateValue } from "./Stateprovider";

function Productpage() {
  const location = useLocation();
  const [{ basket }, dispatch] = useStateValue();
  const { id, title, image, rating, price } = location.state;
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: id,
        title: title,
        image: image,
        rating: rating,
        price: price,
      },
    });
  };
  return (
    <div className="productPage">
      <div className="productPage__container">
        <div className="productPage__left">
          <img className="productPage__img" src={image} alt="ppImage" />
        </div>
        <div className="productPage__right">
          <div className="productPage__info">
            <h2>
              <b>Will update This Page Very Soon</b>
            </h2>
            <h2>{title}</h2>
            <p className="productPage__price">
              <small>₹</small>
              <strong>{price}</strong>
            </p>
            <small>+18% GST</small>
            <div className="productPage__rating">
              {Array(rating)
                .fill()
                .map((_, i) => {
                  return <p>⭐</p>;
                })}
            </div>
            <button className="productPage__btn" onClick={addToBasket}>
              Add to Cart
            </button>
            <div className="productPage__desc">
              <h4>Product Description :</h4>
              <p>
                A diet rich in vegetables and fruits can lower blood pressure,
                reduce the risk of heart disease and stroke, prevent some types
                of cancer, lower risk of eye and digestive problems, and have a
                positive effect upon blood sugar, which can help keep appetite
                in check. Eating non-starchy vegetables and fruits like apples,
                pears, and green leafy vegetables may even promote weight loss.
                [1] Their low glycemic loads prevent blood sugar spikes that can
                increase hunger. A meta-analysis of cohort studies following
                469,551 participants found that a higher intake of fruits and
                vegetables is associated with a reduced risk of death from
                cardiovascular disease, with an average reduction in risk of 4%
                for each additional serving per day of fruit and vegetables. [2]
                The largest and longest study to date, done as part of the
                Harvard-based Nurses’ Health Study and Health Professionals
                Follow-up Study, included almost 110,000 men and women whose
                health and dietary habits were followed for 14 years. The higher
                the average daily intake of fruits and vegetables, the lower the
                chances of developing cardiovascular disease. Compared with
                those in the lowest category of fruit and vegetable intake (less
                than 1.5 servings a day), those who averaged 8 or more servings
                a day were 30% less likely to have had a heart attack or stroke.
                [3]
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productpage;
