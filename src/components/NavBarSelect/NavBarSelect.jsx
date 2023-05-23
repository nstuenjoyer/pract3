import { useState } from 'react';
import '../NavBarSelect/NavBarSelect.css';
import { NavLink } from 'react-router-dom';

const NavBarSelect = ({ options, defaultvalue, value, onChangeSort, ChangeSett }) => {
    const [maxcost, setmaxcost] = useState(500);
    const [lesson, setLesson] = useState('Английский язык')
    const [format, setFormat] = useState('is_distance')

    return (
        <div className="NavBarSelect">
            <div className="NavigationBarSelect">

                <div className="NavBarSelectItem">
                    <div className='NavBarIcon'>Предмет</div>
                    <div className="NavBarText"><select onChange={event => setLesson(event.target.value)} name="TypePredmet" id="TypePredmet" >

                        <option value="Английский язык">Английский язык</option>
                        <option value="Биология">Биология</option>
                        <option value="География">География</option>
                        <option value="История">История</option>
                        <option value="История">Информатика</option>
                        <option value="Литература">Литература</option>
                        <option value="Математика">Математика</option>
                        <option value="Обществознание">Обществознание</option>
                        <option value="Русский язык">Русский язык</option>
                        <option value="Физика">Физика</option>
                        <option value="Химия">Химия</option>
                    </select></div >
                </div>
                <div className="NavBarSelectItem">
                    <div className='NavBarIcon'>Формат занятий</div>
                    <div className="NavBarText"><select onChange={event => setFormat(event.target.value)} name="TypeZanatie" id="TypeZanatie">

                        <option value="is_distance">Дистанционно</option>
                        <option value="is_tutorhome">У репетитора</option>
                        <option value="is_home">У ученика</option>
                    </select></div>
                </div>
                <div className="NavBarSelectItem">
                    <div className='NavBarIcon'>Максимальная стоимость</div>
                    <div className="NavBarText">
                        <div className="range">
                            <div className="RangeNum">{maxcost}</div>
                            <input type="range" name="" min='500' max='6000' step="10" className='MaxCost'
                                onChange={event => setmaxcost(event.target.value)} />
                        </div>
                    </div >
                </div>
                <div className="NavBarSelectItem"><button onClick={event => { ChangeSett(lesson, format, maxcost) }} className='ButtonInput'>Принять</button></div>
                <div className="NavBarSelectItem"><button onClick={event => { ChangeSett('all', 'all', 6000) }} className='ButtonInput'>Показать всех</button></div>
                <div className="NavBarSearch">
                    <div className="NavBarText">

                        <select value={value}
                            onChange={event => onChangeSort(event.target.value)}
                            name="TypeSort" id="TypeZanatie">
                            <option disabled selected value="">{defaultvalue}</option>
                            {options.map(option =>
                                <option key={option.value} value={option.value}>
                                    {option.name}
                                </option>)}
                        </select>

                    </div >
                </div>
                <div className="NavBarSelectItem">
                    <NavLink exact to="/">
                        <div className="NavBarHome">
                            Назад на главную
                        </div>
                    </NavLink>
                </div>
            </div>

        </div>
    );
}
export default NavBarSelect