import React from "react";
import "./contact.scss";
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="contact fade">
      <div className="heading">Get In Touch</div>
      <div className="tittle">
        Know us your feedback or contact us if your organization need to publish
        result
      </div>
      <form onSubmit={handleSubmit}>
        <div className="top">
          <div className="col">
            <input type="text" name="name" id="" placeholder="first name" />
            <input type="email" name="email" id="" placeholder="email" />
          </div>
          <div className="col">
            <input type="text" name="lastName" id="" placeholder="last name" />
            <input type="email" name="phone" id="" placeholder="phone" />
          </div>
        </div>
        <div className="bottom">
          <textarea
            name="address"
            id=""
            cols="30"
            rows="5"
            placeholder="address"
          ></textarea>
          <textarea
            name="message"
            id=""
            cols="30"
            rows="5"
            placeholder="type your message here"
          ></textarea>
          <input className="submitBtn" type="submit" value="Send" />
        </div>
      </form>
    </div>
  );
}
