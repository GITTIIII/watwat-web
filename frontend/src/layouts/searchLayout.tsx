import { Outlet } from 'react-router-dom'
import Footer from '../component/footer/footer'
<<<<<<< HEAD
import NavbarSearch from '../component/header/header-main'
=======
import NavbarSearch from '../component/header/header-search'
>>>>>>> 50a08d645ff3c676341e2a0669f740438f7ba645
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
