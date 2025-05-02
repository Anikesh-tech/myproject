import React from "react";
import "../css/Gallery.css";
import art1 from "../assets/images/art1.jpg";
import art2 from "../assets/images/art2.jpg";

const artworks = [
  {
    title: "Mystic Eyes",
    image: art1,
    description: "A deep expression of soul through charcoal pencil strokes.",
  },
  {
    title: "Colors of Rajasthan",
    image: art2,
    description:
      "Traditional Rajasthani folk art rich in colors and cultural symbolism.",
  },
];

function Gallery() {
  return (
    <section className="gallery">
      <h2>Art Gallery</h2>
      <div className="gallery-grid">
        {artworks.map((art, index) => (
          <div className="gallery-card" key={index}>
            <img src={art.image} alt={art.title} />
            <div className="gallery-info">
              <h3>{art.title}</h3>
              <p>{art.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
