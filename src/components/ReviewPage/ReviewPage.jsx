import ReviewList from "./ReviewList";
import NavBar from "../Homepage/NavBar/NavBar";
import { useContext } from "react";
function RewiewPage() {

    return (
        <div className="Reviewpage">

            <div className="Rev">Отзывы</div>
            <div className="ReviewpageContent">

                <ReviewList></ReviewList>
            </div>
        </div>
    );
}

export default RewiewPage;




