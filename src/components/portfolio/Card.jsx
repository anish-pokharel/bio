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
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
