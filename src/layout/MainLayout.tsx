import {Outlet} from "react-router-dom";
import Menu from "../menu/Menu.tsx";

const MainLayout = () => {
    return (
        <div>
            <Menu/>
            <Outlet/>
        </div>
    );
};

export default MainLayout;