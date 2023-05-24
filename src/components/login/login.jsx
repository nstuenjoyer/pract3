import { useContext, useState } from "react";
import "./login.css"
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/context";
const Login = () => {
    const { isAuth, setIsAuth } = useContext(AuthContext);

    const [login, setLogin] = useState('');
    const [pass, setPassword] = useState('');
    const loginHandler = (e) => {
        setLogin(e.target.value)
    }
    const passHandler = (e) => {
        setPassword(e.target.value)
    }

    const [isPassTrue, setIsPassTrue] = useState(false)
    const Makelogin = (userLog, userPass) => {
        if (userLog === "root" && userPass === "root") {
            setIsAuth(true)
        }
        else {
            setIsPassTrue(true)
        }
    }
    return (
        <div className="loginPage">

            <div className="loginContainer">

                <div className="userlogin">Ваше имя</div>
                <input onChange={e => loginHandler(e)} value={login} type="text" name="Name" id="Name" placeholder='Введите логин' />
            </div>
            <div className="userpassword">
                <div className="RevName">Вашa фамилия</div>
                <input onChange={e => passHandler(e)} value={pass} type="password" name="Surname" id="Surname" placeholder='Введите пароль' />
            </div>
            {isPassTrue && <div style={{ color: 'red' }}>Неправильный логин или пароль</div>}
            <NavLink to="/"><button className="LoginButton" onClick={event => Makelogin(login, pass)}>Вход</button></NavLink>
        </div>
    )
}

export default Login;