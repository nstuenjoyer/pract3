import '../NavBar/NavBar.css';
function NavBar() {


    return (
        <div className="NavBar">
            <div className="NavigationBar">
                <div className="NavBarItem"><a link="">
                    <div className='NavBarIcon'>Тут иконка</div>
                    <div className="NavBarText">Главная страница</div>
                </a></div>
                <div className="NavBarItem"><a link="">
                    <div className='NavBarIcon'>Тут иконка</div>
                    <div className="NavBarText">Тут будет информация</div >
                </a></div>
                <div className="NavBarItem"><a link="">
                    <div className='NavBarIcon'>Тут иконка</div>
                    <div className="NavBarText">Туasdasdasdasdт будет ещеasdasd что-то</div >
                </a></div>
                <div className="NavBarItem"><a link="">
                    <div className='NavBarIcon'>Тут иконка</div>
                    <div className="NavBarText">Тут будет информация</div >
                </a></div>
                <div className="NavBarItem"><a link="">
                    <div className='NavBarIcon'>Тут иконка</div>
                    <div className="NavBarText">Тут будет информация</div >
                </a></div>
                <div className="NavBarSearch">
                    <input type="text" id='search' placeholder='Поиск...' />
                    <label for="search">тут иконка</label>
                </div>
            </div>

        </div>
    );
}
export default NavBar