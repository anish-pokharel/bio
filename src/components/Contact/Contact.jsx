import React, { useState } from "react";
import contact1 from "./Contact1.png";
const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });
  return (
    <>
      <section className="Contact" id="contact">
        <div className="container top">
          <div className="heading text-center">
            <h4>Contact</h4>
            <h1>contact with Me</h1>
          </div>
          <div className="content d_flex">
            <div className="left">
              <div className="box box_shodow">
                <div className="img">
                  <img src={contact1} alt="" />
                </div>
                <div className="details">
                  <h1>Nevine Acotanza</h1>
                  <p>Chief Operating Officer</p>
                  <p>
                    I am available for freelance work. Connect with me via and
                    call in to my account.
                  </p>
                  <br />
                  <p>Phone: +01234567890</p>
                  <p>Email: admin@example.com</p> <br />
                  <span>FIND WITH ME</span>
                  <div className="button f_flex">
                    <button className="btn_shadow">
                      <i className="fab fa-facebook-f"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-instagram"></i>
                    </button>
                    <button className="btn_shadow">
                      <i className="fab fa-twitter"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="right box_shodow">
              <form action="">
                <div className="f_flex">
                  <div className="input row">
                    <span>Your Name</span>
                    <input type="text" value={data.fullname} />
                  </div>
                  <div className="input row">
                    <span>Phone Number</span>
                    <input type="text" value={data.phone} />
                  </div>
                </div>
                <div className="input ">
                  <span>EMAIL </span>
                  <input type="text" value={data.email} />
                </div>
                <div className="input ">
                  <span>SUBJECT </span>
                  <input type="text" value={data.subject} />
                </div>
                <div className="input ">
                  <span>YOUR MESSAGE </span>
                  <textarea
                    cols="30"
                    rows="10"
                    name="message"
                    value={data.message}
                  />
                </div>
                <button className="btn_shadow">
                  SEND MESSAGE <i className="fa fa-long-arrow-right"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
