import Footer from "../../component/footer";
import "../../css/userProfile.css";
import NavbarMain from "../../component/navbar-main";
import { Form } from "react-router-dom";

const UserProfile = () => {
  return (
    <>
      <header>
        <NavbarMain/>
      </header>
      <main style={{ backgroundImage: "url(/image/temple.jpg)" }}>
        <div className="profile"></div>
          <div className="info">
            <Form>
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </Form>
          </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default UserProfile;