import React from 'react'
import NavbarLogin from '../component/navbar-login'
import { Outlet } from 'react-router-dom'
import Footer from '../component/footer'

export default function LoginLayout() {

  return (
    <>
        <header>
            <NavbarLogin/>
        </header>
        <main style={{ backgroundImage: "url(/image/monk_login.png)" }}>
            <Outlet/>
        </main>
        <footer>
            <Footer/>
        </footer>
    </>
  )
}
