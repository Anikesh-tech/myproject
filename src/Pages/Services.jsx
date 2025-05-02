import React from "react";
import "../css/Services.css";
import sketch from "../assets/images/sketch.jpg";
import modern from "../assets/images/modern.jpg";
import traditional from "../assets/images/traditional.jpg";
import print from "../assets/images/print.jpg";

const services = [
  {
    title: "Pencil Sketching",
    image: sketch,
    price: "₹999",
    description:
      "Hand-drawn custom pencil sketches that capture emotion and detail.",
  },
  {
    title: "Modern Digital Prints",
    image: modern,
    price: "₹1499",
    description:
      "Vibrant modern digital artworks perfect for home decor or gifting.",
  },
  {
    title: "Traditional Folk Art",
    image: traditional,
    price: "₹1299",
    description:
      "Authentic Indian traditional art with intricate patterns and colors.",
  },
  {
    title: "Canvas Printing",
    image: print,
    price: "₹1799",
    description: "High-quality canvas prints that bring your walls to life.",
  },
];

function Services() {
  return (
    <section className="services">
      <h2>Our Services</h2>
      <div className="service-cards">
        {services.map((service, index) => (
          <div className="card" key={index}>
            <img src={service.image} alt={service.title} />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <span className="price">{service.price}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Services;
