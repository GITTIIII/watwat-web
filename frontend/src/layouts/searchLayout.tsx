import { Outlet } from 'react-router-dom'
import Footer from '../component/footer'
import NavbarSearch from '../component/navbar-main'

export default function SearchLayout() {

  return (
    <>
        <header>
            <NavbarSearch/>
        </header>
        <main style={{ backgroundImage: "url(/image/temple.jpg)" }}>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}
