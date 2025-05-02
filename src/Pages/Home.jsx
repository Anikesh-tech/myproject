import "../css/Home.css";
import jahanviImg from "../assets/images/jahanvii.jpeg";
import About from "./About";
import Services from "./Services";
import Gallery from "./Gallery";
import Contact from "./Contact";
function Home() {
  return (
    <>
      <section className="home">
        <div className="image-container">
          <img src={jahanviImg} alt="Artist Jahanvi" />
        </div>
        <div className="info">
          <h2>Welcome to the World of Art</h2>
          <p>
            I'm Jahanvi, a professional artist specializing in modern and
            traditional art forms that captivate the soul.
          </p>
        </div>
      </section>
      <div className="About">
        <About />;
      </div>
      <div className="Service">
        <Services />
      </div>
      <div className="Gallery">
        <Gallery />
      </div>
      <div className="Contact">
        <Contact />
      </div>
    </>
  );
}

export default Home;
