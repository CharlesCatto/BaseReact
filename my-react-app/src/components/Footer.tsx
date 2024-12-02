import facebook from "../assets/images/facebook.png";
import instagram from "../assets/images/instagram.png";
import linkedin from "../assets/images/linkedin.png";
import twitter from "../assets/images/twitter.png";
import "./Footer.css";

function Footer() {
  return (
    <section>
      <footer>
        <div className="container_icon">
          <a href="_">
            <img
              src={instagram}
              alt="icone instagram"
              className="social_icon"
            />
          </a>
          <a href="_">
            <img src={facebook} alt="icone facebook" className="social_icon" />
          </a>
          <a href="_">
            <img src={linkedin} alt="icone linkedin" className="social_icon" />
          </a>
          <a href="_">
            <img src={twitter} alt="icone twitter" className="social_icon" />
          </a>
        </div>
        <p className="creators">Hackathon @2024</p>
      </footer>
    </section>
  );
}

export default Footer;
