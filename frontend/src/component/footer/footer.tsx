import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer>
      <div className="contact">CONTACT</div>
      <div>111/3, Surswithee 1, Suranaree </div>
      <div>Mueang Nakhon Ratchasima, Nakhon Ratchasima, 30000</div>
      <div>SA_G04@sut.ac.th</div>
      <div className="iconall">
        <a href="https://github.com/BHU23">
          <FontAwesomeIcon icon={faFacebook} className="icon" />
        </a>
        <a href="https://github.com/BHU23">
          <FontAwesomeIcon icon={faXTwitter} className="icon" />
        </a>
        <a href="https://github.com/BHU23">
          <FontAwesomeIcon icon={faInstagram} className="icon" />
        </a>
        <a href="https://github.com/BHU23">
          <FontAwesomeIcon icon={faGithub} className="icon" />
        </a>
      </div>
<<<<<<< HEAD
=======

>>>>>>> 6784274a1ef5d3c510d056fb462c955f616e8aef
    </footer>
  );
}

export default Footer;
