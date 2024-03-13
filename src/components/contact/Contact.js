import React, { useEffect } from "react";
import "./contact.css";
import img from "./brand communication-rafiki.png";
const Contact = () => {
  useEffect(()=>{
    window.scrollTo({
      top:0,
      behavior:"smooth"
    })
  },[])
  return (
    <div className="callback-dgmt-container">
      <div className="callback-dgmt">
        <div className="call-back-img">
          <img loading="lazy" src={img} alt="" />
        </div>
        <div className="call-back-dgmt-form">
          <h2>Contact For Service</h2>
          <form action="https://formspree.io/f/xgegeadg" method="POST">
            <div className="dgmt_form-group">
              <input type="text" name="name" placeholder="Enter Your Name" />
            </div>
            <div className="dgmt_form-group">
              <input type="email" name="email" placeholder="Enter Your Email" />
            </div>
            <div className="dgmt_form-group">
              <input
                type="tel"
                name="contactnumber"
                placeholder="Enter Your Number"
              />
            </div>
            <div className="dgmt_form-group options ">
              <select>
                <option value="select">Select Services</option>
                <option value="graphic-design">Graphic Design</option>
                <option value="web-design">Web Design</option>
                <option value="seo-development">SEO Development</option>
                <option value="app-development">App Development</option>
                <option value="digital-marketing">Digital Marketing</option>
                <option value="b2b-service">B2B Service</option>
                <option value="smo-service">SMO Service</option>
                <option value="web-development">Web Development</option>
              </select>
            </div>
            <div className="dgmt_form-group">
              <textarea
                type="message"
                name="message"
                placeholder="Any Message"
              />
            </div>
            <button class="btns">
              <span>Submit</span>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
