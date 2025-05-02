import React from "react";
import "../css/Contact.css";

function Contact() {
  return (
    <section className="contact-page">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <div className="contact-form">
          <form>
            <input type="text" placeholder="Full Name" required />
            <input type="email" placeholder="Email Address" required />
            <input type="tel" placeholder="Phone Number" required />
            <input type="text" placeholder="State" />
            <input type="text" placeholder="City" />
            <textarea rows="4" placeholder="Address"></textarea>
            <button type="submit">Submit</button>
          </form>
        </div>
        <div className="contact-info">
          <h3>Reach Out to Us</h3>
          <p>
            <strong>Email:</strong>{" "}
            <a href="mailto:artishjanhnvi@gmail.com">artishjanhnvi@gmail.com</a>
          </p>
          <p>
            <strong>Phone:</strong>{" "}
            <a href="tel:+918115368994">+91 81153 68994</a>
          </p>
          <p>
            <strong>Address:</strong>
            <br />
            Block, A-7 Ground Floor, Southend Floors A,
            <br />
            Badshahpur Sohna Rd Hwy,
            <br />
            South City II, Sector 49,
            <br />
            Gurugram, Fatehpur, Haryana 122018
          </p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
