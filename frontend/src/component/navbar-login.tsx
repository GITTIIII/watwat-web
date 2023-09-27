import { Link } from 'react-router-dom'
import '../css/navbar.css'
import Logo from './logo';

function NavbarLogin(){
  return (
    <div className="navbar">
          <div className="topleft-navbar">
            <Logo/>
            <span>Wat Wat</span>
          </div>
          <div className="topright-navbar">
            <button>
              <Link to="/register">
                <button>สมัครสมาชิก</button>
              </Link>
            </button>
          </div>
        </div>
  )
}

export default NavbarLogin;