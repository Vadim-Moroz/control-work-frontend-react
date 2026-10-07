import {Link} from "react-router-dom";

const Menu = () => {
    return (
        <div>
            <ul>
                <li><Link to='/'>Home</Link></li>
                <li><Link to='movies'>Resources</Link></li>
            </ul>
            <hr/>
        </div>
    );
};

export default Menu;