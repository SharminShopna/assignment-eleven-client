import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";


const MainLayout = () => {
    return (
        <>
        <div className="max-w-7xl mx-auto">
            <Header></Header>
            <Outlet></Outlet>
            
        </div>
        <Footer></Footer>
            
        </>
    );
};

export default MainLayout;