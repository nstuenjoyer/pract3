import Tutor from "./Tutor";
import { useEffect, useMemo, useState } from "react";
import "./Tutor.css";

import NavBarSelect from "../NavBarSelect/NavBarSelect";
const TutorList = () => {
    const [tutors, setData] = useState([]);
    const url = "http://217.71.129.139:5534";
    const [selectedSort, setSelectedSort] = useState('None');
    const [options, setOptions] = useState({
        method: 'GET',
        mode: 'cors',
    })
    const [tutorLeng, setTutorLeng] = useState(0);
    const [outputTutors, setOutputTutors] = useState([])
    const [currentmax, setCurrentmax] = useState(5)
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, [])

    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 50) {

            setCurrentmax(currentmax + 5)

        }

    }
    const drawTutors = () => {

        return (outputTutors.map(tutor => <Tutor tutor={tutor} key={tutor.idtutor}></Tutor>).slice(0, currentmax))
    }
    const selectTutors = (lesson, format, maxcost) => {
        let kostil = [];
        if (lesson === 'all') {
            setOutputTutors(tutors);
            setCurrentmax(5)
        }
        else {
            tutors.forEach(tutor => {
                if (tutor.tutor_lesson === lesson && tutor[format] === 1 && tutor.tutor_cost < maxcost) {

                    kostil = [...kostil, tutor];

                }
            });
            setOutputTutors(kostil);
        }
    }

    const sortedTutors = useMemo(() => {
        switch (selectedSort) {
            case 'None': {
                break;
            }
            case 'tutor_surnameUp': {
                setOutputTutors([...outputTutors].sort((a, b) => a.tutor_surname < b.tutor_surname ? -1 : 1))
                break;
            }
            case 'tutor_surnameDown': {
                setOutputTutors([...outputTutors].sort((b, a) => a.tutor_surname < b.tutor_surname ? -1 : 1))
                break;
            }
            case 'tutor_costUp': {
                setOutputTutors([...outputTutors].sort((a, b) => a.tutor_cost < b.tutor_cost ? -1 : 1))
                break;
            }
            case 'tutor_costDown': {
                setOutputTutors([...outputTutors].sort((b, a) => a.tutor_cost < b.tutor_cost ? -1 : 1))
                break;
            }
            case 'tutor_markUp': {
                setOutputTutors([...outputTutors].sort((a, b) => a.tutor_mark < b.tutor_mark ? -1 : 1))
                break;
            }
            case 'tutor_markDown': {
                setOutputTutors([...outputTutors].sort((b, a) => a.tutor_mark < b.tutor_mark ? -1 : 1))
                break;
            }
        }
    }, [selectedSort, tutors])

    const sortPosts = (sort) => {

        setSelectedSort(sort);
    }

    useEffect(() => {
        const fetchData = () => {

            fetch(url, options)
                .then(response => response.json())
                .then(data => {
                    setData(data)
                    setOutputTutors(data);
                    setTutorLeng(data.length);

                })
                .catch(error => console.log('Ошибка запроса', error));

        }
        fetchData();

    }, [options]);



    return (
        <div className="TutorListContent">
            <NavBarSelect
                ChangeSett={selectTutors}
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
                    outputTutors.length !== 0
                        ?
                        drawTutors()
                        :
                        <div className="Unlucky">К сожалению по вашему условию никого нет</div>

                }
            </div>
        </div >
    );
}
export default TutorList;