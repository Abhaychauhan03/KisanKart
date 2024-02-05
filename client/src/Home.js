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
            title="Onion: 1 Kg"
            price={750}
            rating={4}
            image="https://static.vecteezy.com/system/resources/previews/009/456/958/original/simple-single-cute-carrot-healthy-food-vitamins-vegetables-illustration-in-flat-style-vector.jpg"
          />
          <Product
            id="0002"
            title="Carrot: 1 Kg"
            price={100}
            rating={4}
            image="https://static.vecteezy.com/system/resources/previews/009/456/958/original/simple-single-cute-carrot-healthy-food-vitamins-vegetables-illustration-in-flat-style-vector.jpg"
          />
          <Product
            id="0003"
            title="Cabbage: 1 Kg"
            price={350}
            rating={5}
            image="https://static.vecteezy.com/system/resources/previews/009/456/958/original/simple-single-cute-carrot-healthy-food-vitamins-vegetables-illustration-in-flat-style-vector.jpg"
          />
          <Product
            id="0004"
            title="Beans: 1 Kg"
            price={350}
            rating={5}
            image="https://static.vecteezy.com/system/resources/previews/009/456/958/original/simple-single-cute-carrot-healthy-food-vitamins-vegetables-illustration-in-flat-style-vector.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="0005"
            title="Capsicum: 1 Kg"
            price={140}
            rating={4}
            image="https://static.vecteezy.com/system/resources/previews/009/456/958/original/simple-single-cute-carrot-healthy-food-vitamins-vegetables-illustration-in-flat-style-vector.jpg"
          />
          <Product
            id="0006"
            title="Milk: 1 Kg"
            price={299}
            rating={3}
            image="https://static.vecteezy.com/system/resources/previews/009/456/958/original/simple-single-cute-carrot-healthy-food-vitamins-vegetables-illustration-in-flat-style-vector.jpg"
          />
          <Product
            id="0007"
            title="Tomato: 1 Kg"
            price={400}
            rating={4}
            size="lg"
            image="https://static.vecteezy.com/system/resources/previews/009/456/958/original/simple-single-cute-carrot-healthy-food-vitamins-vegetables-illustration-in-flat-style-vector.jpg"
          />
        </div>

        <div className="home__row">
          <Product
            id="0007"
            title="Spinach: 1 Kg"
            price={299}
            rating={4}
            size="lg"
            image="https://static.vecteezy.com/system/resources/previews/009/456/958/original/simple-single-cute-carrot-healthy-food-vitamins-vegetables-illustration-in-flat-style-vector.jpg"
          />
          <Product
            id="0008"
            title="Ground Nuts: 1 Kg"
            price={299}
            rating={4}
            image="https://static.vecteezy.com/system/resources/previews/009/456/958/original/simple-single-cute-carrot-healthy-food-vitamins-vegetables-illustration-in-flat-style-vector.jpg"
          />
          <Product
            id="0009"
            title="Garlic: 1 Kg"
            price={299}
            rating={4}
            image="https://static.vecteezy.com/system/resources/previews/009/456/958/original/simple-single-cute-carrot-healthy-food-vitamins-vegetables-illustration-in-flat-style-vector.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
