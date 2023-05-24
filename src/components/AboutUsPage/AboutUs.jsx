import '../AboutUsPage/AboutUs.css';
import NavBar from '../Homepage/NavBar/NavBar';
import { NavLink } from 'react-router-dom';
function AboutUs() {
    return (<div className="AboutUsPage">
        <h1 className='AboutUsH1'>Почему именно мы?</h1>
        <div className='AboutUsPageInfo'>

            <div className="FirstString">
                <div className='Container1'>
                    <p className='NowTutors'>В данный момент через наш сайт работают n первоклассных репетиторов</p>
                </div>

                <div className='Container2'>
                    <p className='BinNum'>87</p>
                    <p className='AvgMark'>Средний балл учеников наших репетиторов</p>
                    <img className='CoolImg' src="img/cool.png" alt="" />
                </div>
            </div>
            <div className="SecondString">
                <div className='Container3'>
                    <p className="Container3Name">Лучший материал</p>
                    <p className='ProgrammText'>Программу для подготовки к Егэ разрабытывает большая команда методистов и экспертов. Каждый год программа обновляется</p>

                </div>

                <div className='Container4'> <p className='NowTutors'>Тут могла быть ваша реклама</p></div>
            </div>


        </div>
        <NavLink exact to="/" className="BackToHome">
            <div >
                Назад на главную
            </div>
        </NavLink>
    </div>
    );
}

export default AboutUs