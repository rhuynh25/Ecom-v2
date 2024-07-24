import React from 'react';
import Slider from './Slider';
import "./Home.css";

function Home() {
  const slides = [
    {
      title: 'Windbreaker Jet-Black',
      price: '64.99',
      image: '/ecom-img/windbreaker.png',
    },
    {
      title: 'Racing Jacket',
      price: '82.99',
      image: '/ecom-img/racerjacket.jpg',
    },
    {
      title: 'Summer Wool Tapered Slacks',
      price: '59.99',
      image: '/ecom-img/slacks.jpg',
    },
    {
      title: 'Cotton Cargo',
      price: '49.99',
      image: '/ecom-img/cargojog.jpg',
    },
  ];

  return (
    <main>
      <div className="hero">
        <video autoPlay muted loop id="hero-video">
          <source src="/ecom-img/herovid.mp4" type="video/mp4" />
        </video>
        <div className="container">
          <h1>RPH</h1>
          <p>Your shop for the hottest clothes</p>
        </div>
      </div>
      <section className="about">
        <div className="container">
          <h2>About Us</h2>
          <p>Welcome to RPH, where style meets comfort! At RPH, we believe that looking good should never mean sacrificing comfort. Our mission is to provide you with high-quality, stylish apparel that feels as good as it looks. From everyday essentials to standout pieces, we curate a collection that caters to your unique taste and lifestyle. Join us on a journey to discover fashion that empowers you to express yourself effortlessly. Experience the perfect blend of style and comfort with RPH!</p>
        </div>
      </section>
      <section className="featured-products">
        <div className="container">
          <h2>Featured Products</h2>
          <Slider slides={slides} />
        </div>
      </section>
    </main>
  );
}

export default Home;