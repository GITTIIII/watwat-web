import "../../../css/place.css";
import NavbarMain from "../../../component/navbar-main";
import Footer from "../../../component/footer";
const Item = () => {
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

export default Item;
