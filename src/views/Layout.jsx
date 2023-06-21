import { Outlet } from "react-router-dom";
import Nav from "../components/Navbar";
import Footer from "../components/Footer";

const Layout = () => {

    return (
        <div className='bg-white bg-no-repeat bg-cover overflow-hidden'>
            <Nav />
            <Outlet />
            {/*<div className='h-[4000px]'></div>*/}
            <Footer />
        </div>
    )
};

export default Layout;