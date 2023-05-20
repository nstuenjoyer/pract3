import { useState } from 'react';
import '../NavBarSelect/NavBarSelect.css';
import { NavLink } from 'react-router-dom';

const NavBarSelect = ({ options, defaultvalue, value, onChangeSort }) => {
    const [maxcost, setmaxcost] = useState(500);

    return (
        <div className="NavBarSelect">
            <div className="NavigationBarSelect">

                <div className="NavBarSelectItem">
                    <div className='NavBarIcon'>Предмет</div>
                    <div className="NavBarText"><select name="TypePredmet" id="TypePredmet" >
                        <option value="" disabled selected>Выберите предмет</option>
                        <option>Английский язык</option>
                        <option>Биология</option>
                        <option>География</option>
                        <option>История</option>
                        <option>Литература</option>
                        <option>Математика</option>
                        <option>Обществознание</option>
                        <option>Русский язык</option>
                        <option>Физика</option>
                        <option>Химия</option>
                    </select></div >
                </div>
                <div className="NavBarSelectItem">
                    <div className='NavBarIcon'>Формат занятий</div>
                    <div className="NavBarText"><select name="TypeZanatie" id="TypeZanatie">
                        <option value="" disabled selected>Выберите формат занятия</option>
                        <option>Дистанционно</option>
                        <option>У репетитора</option>
                        <option>У ученика</option>
                    </select></div >
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
                <div className="NavBarSelectItem"><button className='ButtonInput'>Принять</button></div>
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