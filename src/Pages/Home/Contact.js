import React from "react";
import emailjs from "emailjs-com";
import { FcBusinessman } from "react-icons/fc";
import { HiOutlineMailOpen } from "react-icons/hi";
import { FcAddressBook } from "react-icons/fc";

import "./Contact.css";
import { toast } from "react-toastify";

const Contact = () => {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm("gmail", "template_zykgh9h", e.target, "C1UIEfl0Q59TaE21m")
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    toast("Message Sent");
  }

  return (
    <div className="mt-20">
      <section id="contract">
        <div class="container">
          <center>
            <h1 className="fs-1 text-indigo-500 font-semibold">Contact Me</h1>
          </center>
          <div class="row">
            <div class="col-md-6 contract-col1">
              <h3>Get in Touch...</h3>
              <p class="p">Ticket Kato Ensures Client Satisfaction at Top.</p>

              <div class="contact-icone">
                <div>
                  <i>
                    <FcBusinessman></FcBusinessman>
                  </i>
                </div>
                <div class="i-p">
                  <b> Company </b>
                  <p>Ticket kato</p>
                </div>
              </div>
              <div class="contact-icone">
                <div>
                  <i>
                    <HiOutlineMailOpen></HiOutlineMailOpen>
                  </i>
                </div>
                <div class="i-p">
                  <b> EMAIL </b>
                  <p>info@ticketkato.com</p>
                </div>
              </div>
              <div class="contact-icone">
                <div>
                  <i>
                    <FcAddressBook></FcAddressBook>
                  </i>
                </div>
                <div class="i-p">
                  <b>Address:</b>
                  <p>Dhanmondi, Dhaka.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 contract-2">
              <h1 className="text-blue-600 font-semibold fs-3">
                Write Your Message:
              </h1>
              <form onSubmit={sendEmail}>
                {/* <!--  --> */}
                <div class="name-email">
                  <input
                    type="text"
                    placeholder=" Name"
                    name="name"
                    class="nam border-2"
                  />
                  <input
                    type="email"
                    placeholder="Email"
                    name="email"
                    class="eml border-2"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    class="sub"
                    name="subject"
                    className="subject border-2"
                  />
                </div>
                <div>
                  <textarea
                    name="message"
                    id=""
                    cols="60"
                    rows="6"
                    placeholder="Message"
                    class="mess border-2"
                  ></textarea>
                </div>
                <button type="submit" onclick="from_control()">
                  Tuch me
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
