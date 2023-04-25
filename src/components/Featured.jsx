import React from "react";
import "./Featured.css";
const Featured = () => {
  return (
    <section class="section-featured">
      <div class="container">
        <h2 class="heading-featured-in">As featured in</h2>
        <div class="logos">
          <img
            src="./image/logos/business-insider.png"
            alt="business-insider"
          />

          <img src="./image/logos/forbes.png" alt="business-insider" />

          <img src="./image/logos/techcrunch.png" alt="business-insider" />

          <img
            src="./image/logos/the-new-york-times.png"
            alt="business-insider"
          />

          <img src="./image/logos/usa-today.png" alt="business-insider" />
        </div>
      </div>
    </section>
  );
};

export default Featured;
