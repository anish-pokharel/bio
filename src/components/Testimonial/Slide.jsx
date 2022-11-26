import React from "react";
import TestimonialAPI from "../Testimonial/TestimonialAPI";

const Slide = ({ id, image, design, name, officer, post, date, desc }) => {
  return (
    <>
      <article className="d_flex">
        <div className="left box_shodow">
          <div className="img">{/* <img src={image} alt="" /> */}</div>
          <div className="details mtop">
            <span className="primary_color">{design}</span>
            <h2>{name}</h2>
            <label>{officer}</label>
          </div>
        </div>
        <div className="right">
          <div className="icon">
            <div className="quote">
              <i className="fal fa-quote-right"></i>
            </div>
          </div>
          <div className="content box_shodow mtop">
            <h1>{post}</h1>
            <h3>{date}</h3>
            <p>{desc}</p>
          </div>
        </div>
      </article>
    </>
  );
};

export default Slide;
