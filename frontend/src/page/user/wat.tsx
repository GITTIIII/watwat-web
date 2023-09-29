import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons"; //for icon
import { Link } from "react-router-dom";
import "../css/place.css";
import NavbarMain from "../component/navbar-main";
import Footer from "../component/footer";
const Wat = () => {
  return (
    <>
      <header>
        <NavbarMain/>
      </header>
      <main style={{ backgroundImage: "url(/image/temple.jpg)" }}>
        
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Wat;
