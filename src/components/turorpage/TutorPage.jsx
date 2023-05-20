import NavBar from "../Homepage/NavBar/NavBar";
import TutorList from "./Tutorlist";


function TutorPage() {

    return (
        <div className="Tutorpage">
            <NavBar ></NavBar>
            <div className="TutorpageContent">
                <TutorList></TutorList>
            </div>
        </div>
    );
}

export default TutorPage;