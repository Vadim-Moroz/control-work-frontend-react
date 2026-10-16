import {Link} from "react-router-dom";
import "./style/Menu.css"

const Menu = () => {
    return (
        <div className="menu">
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='movies'>Movies</Link></li>
            </ul>
        </div>
    );
};

export default Menu;