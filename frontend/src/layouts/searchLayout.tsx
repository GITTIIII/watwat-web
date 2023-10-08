import { Outlet } from 'react-router-dom'
import Footer from '../component/footer/footer'
import NavbarSearch from '../component/header/navbar-main'
import temple from '../assets/temple.jpg'
export default function SearchLayout() {

  return (
    <>
        <header>
            <NavbarSearch/>
        </header>
        <main style={{ backgroundImage: `url(${temple})` }}>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}
