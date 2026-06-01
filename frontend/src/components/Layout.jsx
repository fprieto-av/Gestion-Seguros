import {Outlet} from 'react-router-dom'
import SvgSymbols from './SvgSymbols'
import Loader from './Loader'
import Topbar from './Topbar'
import Navbar from './Navbar'
import Footer from './Footer'
import WhatsAppButton from './WhatsAppButton'
import  CookieBanner from './CookieBanner'

export default function Layout() {
    return(
        <>
            <SvgSymbols />
            <Loader />
            <Topbar />
            <Navbar />
            <main>
                <Outlet />
            </main>
            <Footer />
            <WhatsAppButton />
            <CookieBanner />
        </>
    )
}