import Tutor from "./Tutor";
import { useEffect, useState } from "react";
import "./Tutor.css";

import NavBarSelect from "../NavBarSelect/NavBarSelect";
const TutorList = () => {
    const [selectedSort, setSelectedSort] = useState();
    const [options, setOptions] = useState({
        method: 'GET',
        mode: 'cors',
    })

    const sortPosts = (sort) => {
        console.log(sort);
        setSelectedSort(sort);
        switch (sort) {
            case 'tutor_surnameUp': {
                setData([...tutors].sort((a, b) => a.tutor_surname < b.tutor_surname ? -1 : 1))
                break;
            }
            case 'tutor_surnameDown': {
                setData([...tutors].sort((b, a) => a.tutor_surname < b.tutor_surname ? -1 : 1))
                break;
            }
            case 'tutor_costUp': {
                setData([...tutors].sort((a, b) => a.tutor_cost < b.tutor_cost ? -1 : 1))
                break;
            }
            case 'tutor_costDown': {
                setData([...tutors].sort((b, a) => a.tutor_cost < b.tutor_cost ? -1 : 1))
                break;
            }
            case 'tutor_markUp': {
                setData([...tutors].sort((a, b) => a.tutor_mark < b.tutor_mark ? -1 : 1))
                break;
            }
            case 'tutor_markDown': {
                setData([...tutors].sort((b, a) => a.tutor_mark < b.tutor_mark ? -1 : 1))
                break;
            }
        }
    }
    const [tutors, setData] = useState([]);
    const url = "http://localhost:2000";

    useEffect(() => {
        const fetchData = () => {

            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    setData(data)
                    console.log(data);
                })
                .catch(error => console.log('Ошибка запроса', error));
        }
        fetchData();

    }, [options]);



    return (
        <div className="TutorListContent">
            <NavBarSelect

                value={selectedSort}
                onChangeSort={sortPosts}
                defaultvalue="Сортировка по: " options={[
                    { value: 'tutor_surnameUp', name: 'По ФИО: Возрастание' },
                    { value: 'tutor_surnameDown', name: 'По ФИО: Убывание' },
                    { value: 'tutor_costUp', name: 'По цене: Возрастание' },
                    { value: 'tutor_costDown', name: 'По цене: Убывание' },
                    { value: 'tutor_markUp', name: 'По оценке: Возрастание' },
                    { value: 'tutor_markDown', name: 'По оценке: Убывание' },
                ]}></NavBarSelect>
            <div className="Tutorlist">

                {
                    tutors.length !== 0
                        ?
                        tutors.map(tutor => <Tutor tutor={tutor} key={tutor.idtutor}></Tutor>)
                        :
                        <div>К сожалению по вашему условию никого нет</div>

                }
            </div>
        </div >
    );
}
export default TutorList;