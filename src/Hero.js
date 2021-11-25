import React from "react";
import phoneImg from "./images/phone.svg";
import { useGlobalContext } from "./context";

const Hero = () => {
  const { closeSubmenu } = useGlobalContext();

  return (
    <section className="hero">
      <div className="hero-center">
        <article className="hero-info">
          <h1>Payment infrastructure for the internet</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veritatis
            porro laboriosam maiores reiciendis voluptas debitis voluptates
            harum, dicta, quisquam amet quam ullam est quos, itaque mollitia!
            Quis consectetur maiores ut! Repellendus rerum laudantium nesciunt
            maiores tempora ad labore placeat rem, ab nulla qui porro earum,
            nemo vitae. Dolor atque reprehenderit cupiditate et vel itaque
            aperiam, consectetur repellat nisi, optio voluptas?
          </p>
          <button className="btn">Start Now</button>
        </article>
        <article className="hero-images">
          <img src={phoneImg} className="phone-img" alt="phone" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
