import React from "react";
import Slide from "./Slide";
import TestimonialAPI from "../Testimonial/TestimonialAPI";

const Testimonial = () => {
  return (
    <>
      <section className="Testimonal" id="clients">
        <div className="container">
          <div className="heading text-center">
            <h4>What client says </h4>
            <h1>Testimonial</h1>
          </div>
          <div className="slide">
            {TestimonialAPI.map((val, index) => {
              return (
                <>
                  <Slide
                    key={index}
                    image={val.image}
                    design={val.design}
                    name={val.name}
                    offcer={val.offcer}
                    post={val.post}
                    date={val.date}
                    desc={val.desc}
                  />
                </>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Testimonial;
