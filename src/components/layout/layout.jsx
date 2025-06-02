import Navbar from "../Navbar/Navbar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "../Footer/Footer.jsx";

export const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet/>
            <Footer/>
        </div>
    )
}