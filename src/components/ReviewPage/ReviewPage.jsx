import ReviewList from "./ReviewList";
import NavBar from "../Homepage/NavBar/NavBar";
function RewiewPage() {

    return (
        <div className="Reviewpage">
            <NavBar ></NavBar>
            <div className="Rev">Отзывы</div>
            <div className="ReviewpageContent">

                <ReviewList></ReviewList>
            </div>
        </div>
    );
}

export default RewiewPage;




