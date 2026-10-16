import {Outlet} from "react-router-dom";
import './MainLayout.css'
import Header from "../components/Header.tsx";

const MainLayout = () => {
    return (
        <div className="main">
            <div className="container">
                <Header/>
            </div>
            <Outlet/>
        </div>
    );
};

export default MainLayout;