import React from "react";
import "./Hero.css";
const Hero = () => {
  return (
    <section class="section-hero">
      <div class="hero">
        <div class="hero-text-box">
          <h1 class="heading-primary">
            A healthy meal delivered to your door, every single day
          </h1>
          <p class="hero-discription">
            The smart 365-days-per-year food subscription that will make you eat
            healthy again. Tailored to your personal tastes and nutritional
            needs.
          </p>
          <a href="#cta" class="btn btn--full margin-right-sm">
            Start eating well
          </a>
          <a href="#how" class="btn btn--outline">
            Learn more &darr;
          </a>
          <div class="delivered-meals">
            <div class="delivered-imgs">
              <img
                src="./image/customers/customer-1.jpg"
                alt="customersfaces"
              />
              <img
                src="./image/customers/customer-2.jpg"
                alt="customersfaces"
              />
              <img
                src="./image/customers/customer-3.jpg"
                alt="customersfaces"
              />
              <img
                src="./image/customers/customer-4.jpg"
                alt="customersfaces"
              />
              <img
                src="./image/customers/customer-5.jpg"
                alt="customersfaces"
              />
              <img
                src="./image/customers/customer-6.jpg"
                alt="customersfaces"
              />
            </div>
            <p class="delivered-text">
              <span>250,000+</span> meals last year!
            </p>
          </div>
        </div>

        <div class="hero-image-box">
          <picture>
            <source srcset="./image/hero.webp" type="image/webp" />
            <source srcset="./image/hero-min.png" type="image/png" />
            <img src="./image/hero-min.png" alt="hero_img" class="hero-img" />
          </picture>
        </div>
      </div>
    </section>
  );
};

export default Hero;
