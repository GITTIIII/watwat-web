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
<<<<<<< HEAD
        <div className="contact">CONTACT</div>
        <div>111/3, Surawithee 1, Suranaree </div>
        <div>Mueang Nakhon Ratchasima, Nakhon Ratchasima, 30000</div>
        <div>SA_G04@sut.ac.th</div>
        <div className="iconall">
          <a href=""><FontAwesomeIcon icon={faFacebook} className="icon 1"/></a>
          <a href=""><FontAwesomeIcon icon={faXTwitter} className="icon 2"/></a>
          <a href=""><FontAwesomeIcon icon={faInstagram} className="icon 3"/></a>
          <a href="https://github.com/BHU23"><FontAwesomeIcon icon={faGithub} className="icon 4"/></a>
        </div>
=======
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
>>>>>>> eaf66711ce21f4a3d8f3281683f75d8bf564fb60
    </footer>
  );
}

export default Footer;
