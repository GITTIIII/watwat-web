import { Outlet } from 'react-router-dom'
import Footer from '../component/footer'
import NavbarUser from '../component/navbar-user'

export default function UserLayout() {

  return (
    <>
        <header>
            <NavbarUser />
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
