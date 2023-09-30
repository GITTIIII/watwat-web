import Footer from "../../component/footer";
import NavbarMain from "../../component/navbar-main";
import "../../css/profile.css"


const Profile = () => {
  return (
    <>
      <header>
        <NavbarMain/>
      </header>
      <main style={{ backgroundImage: "url(/image/temple.jpg)" }}>
        <div className="middle-box">
        <div className="profile"></div>
          <div className="info">
            <div className="userInfo">
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
              <input type="text" />
            </div>
          </div>
        </div>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
};

export default Profile;