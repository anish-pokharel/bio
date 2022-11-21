import React from "react";
import "./Home.css";
// import { Typewriter } from "react-simple-typewriter";
import hero from "../pic/hero.png";
import skill1 from "../pic/skill1.png";
import skill2 from "../pic/skill2.png";
import skill3 from "../pic/skill3.png";

const Home = () => {
  return (
    <>
      <section className="hero" id="home">
        <div className="container f_flex top">
          <div className="left top">
            <h3>WELCOME TO MY WORLD</h3>
            <h1>
              Hi, I'm <span> jone Lee </span>
            </h1>
            <h2>
              a
              <span>
                {/* <Typewriter words={["Professional Coder, Developer"]} /> */}
              </span>
            </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non unde
              fugiat ullam reprehenderit fuga expedita repellendus provident
              vitae tenetur accusantium? Ducimus distinctio in hic asperiores
              porro sapiente expedita cumque quaerat.
            </p>
            <div className="hero_btn d_flex">
              <div className="col_1">
                <h4>Find With Me</h4>
                <div className="button">
                  <button className="btn_shadow">
                    <i className="fab fa-facebook-f"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-instagram"></i>
                  </button>
                  <button className="btn_shadow">
                    <i className="fab fa-linkedin-in"></i>
                  </button>
                </div>
              </div>
              <div className="col_1">
                <h4>Best Skill on</h4>
                <button className="btn_shadow">
                  <img src={skill1} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill2} alt="" />
                </button>
                <button className="btn_shadow">
                  <img src={skill3} alt="" />
                </button>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="img">
              <img src={hero} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
