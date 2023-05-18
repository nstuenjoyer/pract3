import Tutor from "./Tutor";
import { useEffect, useState } from "react";
import "./Tutor.css";
const TutorList = () => {

    const [tutors, setData] = useState([]);
    const url = "http://localhost:2000";

    useEffect(() => {
        const fetchData = () => {
            let options = {
                method: 'GET'
            }
            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    setData(data)
                })
                .catch(error => console.log('Ошибка запроса', error));
        }
        fetchData();
    }, []);

    console.log(tutors);

    return (
        <div className="Tutorlist">
            {
                tutors.map(tutor =>
                    <Tutor tutor={tutor} key={tutor.idtutor}></Tutor>
                )
            }
        </div>
    );
}
export default TutorList;