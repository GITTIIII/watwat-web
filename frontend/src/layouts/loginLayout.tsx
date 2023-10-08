import React from 'react'
import NavbarLogin from '../component/navbar/navbar-login'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer/footer'
import monk_login from '../assets/monk_login.png'
export default function LoginLayout() {

  return (
    <>
        <header>
            <NavbarLogin/>
        </header>
        <main style={{ backgroundImage: `url(${monk_login})` }}>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}
