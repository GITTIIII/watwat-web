import { Outlet } from 'react-router-dom'
import Footer from '../component/footer'
import NavbarMain from '../component/navbar-main'

export default function UserLayout() {

  return (
    <>
        <header>
            <NavbarMain />
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
