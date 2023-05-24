import '../NavBar/NavBar.css';
import logo from '../../../res/logo2.png';
import { NavLink } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from '../../context/context';
function NavBar() {
    const { isAuth, setIsAuth } = useContext(AuthContext)
    const exit = () => {
        setIsAuth(false);
    }
    return (<div className="NavBar">
        <div className="NavigationBar">
            <div className="NavBarItem">
                <NavLink to="/"><img className="Logo" src={logo} alt="" /></NavLink>
                <div><NavLink to="/login"><p className='login'>Админская панель</p></NavLink>
                    {isAuth && <div>Получены права
                        <button className='LoginExit' onClick={event => exit()}>Х</button>
                    </div>

                    }</div>

            </div>

        </div>
    </div>
    );
}


export default NavBar;