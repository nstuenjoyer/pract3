import '../NavBarSelect/NavBarSelect.css';
function NavBarSelect() {


    return (
        <div className="NavBarSelect">
            <div className="NavigationBarSelect">

                <div className="NavBarSelectItem">
                    <div className='NavBarIcon'>Предмет</div>
                    <div className="NavBarText"><select name="TypePredmet" id="TypePredmet">
                        <option>Пункт 1</option>
                        <option>Пункт 2</option>
                    </select></div >
                </div>
                <div className="NavBarSelectItem">
                    <div className='NavBarIcon'>Формат занятий</div>
                    <div className="NavBarText"><select name="TypeZanatie" id="TypeZanatie">
                        <option>Дистанционно</option>
                        <option>У репетитора</option>
                        <option>У ученика</option>
                    </select></div >
                </div>
                <div className="NavBarSelectItem">
                    <div className='NavBarIcon'>Категория предмета</div>
                    <div className="NavBarText"><select name="TypePodgotovka" id="TypePodgotovka">
                        <option>Огэ</option>
                        <option>Егэ</option>

                    </select></div >
                </div>
                <div className="NavBarSelectItem"><button className='ButtonInput'>Принять</button></div>
                <div className="NavBarSearch">
                    <input type="text" id='search' placeholder='ФИО репетитора...' />
                    <label for="search">тут</label>
                </div>
            </div>

        </div>
    );
}
export default NavBarSelect