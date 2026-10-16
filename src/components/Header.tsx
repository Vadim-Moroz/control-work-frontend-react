import Menu from "./Menu.tsx";
import UserInfo from "./UserInfo.tsx";
import "./style/Header.css"

const Header = () => {
    return (
        <div className="header">
            <Menu/>
            <UserInfo/>
        </div>
    );
};

export default Header;