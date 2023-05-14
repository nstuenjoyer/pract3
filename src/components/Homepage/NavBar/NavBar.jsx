import '../NavBar/NavBar.css';
import logo from '../../../res/logo2.png';
import { NavLink } from "react-router-dom";
function NavBar() {
    return (<div className="NavBar">
        <div className="NavigationBar">
            <div className="NavBarItem">
                <NavLink exact to="/"><img className="Logo" src={logo} alt="" /></NavLink>
            </div>

        </div>
    </div>
    );
}

export default NavBar;