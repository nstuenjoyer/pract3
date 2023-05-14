import NavBar from "./NavBar/NavBar";
import './Homepage.css';
function Homepage() {
    return (<div><NavBar ></NavBar>
        <div className="AboutUs"><h1>ЕГЭ/ОГЭ уже на носу?</h1> <p>Поможем подобрать репетитора для подготовки к экзаменам!</p></div>
    </div>);
}
export default Homepage;