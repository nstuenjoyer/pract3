import NavBar from "../Homepage/NavBar/NavBar";
import TutorList from "./Tutorlist";
import NavBarSelect from "../NavBarSelect/NavBarSelect";

function TutorPage() {

    return (
        <div className="Tutorpage">
            <NavBar ></NavBar>
            <NavBarSelect></NavBarSelect>
            <TutorList></TutorList>
        </div>
    );
}

export default TutorPage;