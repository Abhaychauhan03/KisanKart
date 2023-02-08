import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="/background.jpg"
          alt="amazon-banner"
        />

        <div className="home__row">
          <Product
            id="0001"
            title="Kisan Kraft Kk-Ps5000 5 Litre Plastic Manual Sprayer (Colour May Vary), Hand Powered"
            price={750}
            rating={4}
            image="https://m.media-amazon.com/images/I/81br+2OgKsL._SX522_.jpg"
          />
          <Product
            id="0002"
            title="Wolf-Garten Steel Multi Star Scarifying Rake without Handle (Silver) , Width - 30 cm"
            price={(1, 350)}
            rating={5}
            image="https://m.media-amazon.com/images/I/31D3ymZ6h8L.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="0003"
            title="Homemade Organic Fertilizer Cow Manure, Organic & Natural Plant Nutrient Vermicompost Fertilizer (5 kg)"
            price={140}
            rating={4}
            image="https://m.media-amazon.com/images/I/51rMy2N6rHL.jpg"
          />
          <Product
            id="0004"
            title="F8WARES Thick and Heavy Duty Latex Rubber Gloves Farming Work Pack 1 Pair Yellow (Large, 14inch length)"
            price={299}
            rating={3}
            image="https://m.media-amazon.com/images/I/61RoPIVeRvL._SX522_.jpg"
          />
          <Product
            id="0005"
            title="Nematofree Plus ipl (Verticillium Chlamydosporium 1.0% wp) Biological Pesticide, IPL biologicals Ltd- Pack 1kg"
            price={152}
            rating={4}
            image="https://m.media-amazon.com/images/I/91O3zcihF7L._SY879_.jpg"
          />
        </div>

        <div className="home__row">
          {
            <Product
              id="0006"
              title="ONLY FOR ORGANIC 45 Variety Of Vegetable Seeds With Instruction Manual"
              price={299}
              rating={4}
              image="https://m.media-amazon.com/images/I/61HMQRX3sbL.jpg"
            />
          }
        </div>
      </div>
    </div>
  );
}

export default Home;
