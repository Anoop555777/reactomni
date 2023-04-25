import React from "react";
import "./Header.css";
const Header = () => {
  return (
    <header class="header">
      <a href="#">
        <img src="./image/omnifood-log.png" alt="logo" class="logo" />
      </a>
      <nav class="main-nav ">
        <ul class="main-nav-list">
          <li>
            <a class="main-nav-link" href="#how">
              How it works
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#meals">
              Meals
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#testimonials">
              Testimonials
            </a>
          </li>
          <li>
            <a class="main-nav-link" href="#priceing">
              Pricing
            </a>
          </li>
          <li>
            <a class="main-nav-link nav-cta" href="#cta">
              Try for free
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
