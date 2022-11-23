import React, { useState } from "react";

const Card = (props) => {
  const [modal, setModal] = useState(false);
  const toggleModel = () => {
    setModal(!modal);
  };
  return (
    <>
      <div className="box btn_shadow">
        <div className="img">
          <img src={props.image} alt="" onClick={toggleModel} />
        </div>
        <div className="category d_flex">
          <span onClick={toggleModel}>{props.category}</span>
          <label>
            <i className="far fa-heart"></i>
            {props.totalLike}
          </label>
        </div>
        <div className="title">
          <h2>{props.title}</h2>
          <a href="" className="arrow" onClick={toggleModel}>
            <i className="fas fa-arrow-right"></i>
          </a>
        </div>
      </div>
      {modal && (
        <div className="modal">
          <div onClick={toggleModel} className="overlay"></div>
          <div className="modal-content d_flex">
            <div className="modal-img left">
              <img src={props.image} alt="" />
            </div>
            <div className="model-text right">
              <span>Feature-Design</span>
              <h1>{props.title}</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                dolores necessitatibus ad? Ex quam, qui sed possimus, hic nemo,
                veritatis ut exercitationem quos tempore modi.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta
                dolores necessitatibus ad? Ex quam, qui sed possimus, hic nemo,
                veritatis ut exercitationem quos tempore modi.
              </p>
              <div className="button f_flex mtop">
                <button className="btn_shadow">
                  Like This <i className="far fa-thumbs-up"></i>
                </button>
                <button className="btn_shadow">
                  View Projects <i className="far fa-thumbs-up"></i>
                </button>
                <button
                  className="close-modal btn_shadow"
                  onClick={toggleModel}
                >
                  <i className="fas fa-times"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
