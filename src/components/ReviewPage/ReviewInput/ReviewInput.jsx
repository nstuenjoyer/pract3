import './ReviewInput.css';
import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
const ReviewInput = ({ ChangeData }) => {
    const [name, setName] = useState('');
    const [surname, setSurname] = useState('')
    const [review, setRev] = useState('')
    const [namedirty, setNamedirty] = useState(false);
    const [surnamedirty, setSurnamedirty] = useState(false)
    const [reviewdirty, setRevdirty] = useState(false)
    const [isformValid, setFormValid] = useState(false);
    const [nameerr, setNameerr] = useState('Поле не может быть пустым');
    const [surnameerr, setSurnameerr] = useState('Поле не может быть пустым')
    const [reviewerr, setReverr] = useState('Поле не может быть пустым')
    let sendingData = JSON.parse(JSON.stringify({ type: "add", name: name, surname: surname, review: review }))
    const nameHandler = (e) => {
        setName(e.target.value)
        const re = /[^а-яёА-ЯЁ ]/g;
        if (e.target.value.length === 0) {
            setNameerr('Поле не может быть пустым');
        }
        else if (re.test(String(e.target.value))) {
            setNameerr("Допускается только кириллица")
        }
        else {
            setNameerr("")
        }
    }
    const surnameHandler = (e) => {
        setSurname(e.target.value)
        const re = /[^а-яёА-ЯЁ ]/g;
        if (e.target.value.length === 0) {
            setSurnameerr('Поле не может быть пустым');
        }
        else if (re.test(String(e.target.value))) {
            setSurnameerr("Допускается только кириллица")
        }

        else {
            setSurnameerr("")
        }
    }
    const revHandler = (e) => {
        setRev(e.target.value)

        if (e.target.value.length === 0) {
            setReverr('Поле не может быть пустым');
        }
        else {
            setReverr('');
        }

    }
    const url = "http://217.71.129.139:5538";
    const fetchData = () => {

        fetch(url, {

            mode: 'cors',
            method: 'POST',

            body: JSON.stringify(sendingData)
        }).then(result => console.log('+')).catch(error => console.log('Ошибка запроса', error));
    }
    useEffect(() => {
        if (nameerr || surnameerr || reviewerr) {
            setFormValid(false);
        }
        else {
            setFormValid(true);
        }

    }, [nameerr, surnameerr, reviewerr])
    const SendReview = (userName, userSurname, useRev) => {

        fetchData();
        setName('')
        setSurname('')
        setRev('')

    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case "Name": { setNamedirty(true); break; }
            case "Surname": { setSurnamedirty(true); break; }
            case "Rev": { setRevdirty(true); break; }
        }
    }
    return (
        <div className="RevIn">
            <div className="ReviewInput">
                <div className="RevHead">Оставьте отзыв!</div>
                <div className="NameContainer">

                    <div className="RevName">Ваше имя</div>
                    {(namedirty && nameerr) && <div style={{ color: 'red' }}>{nameerr}</div>}
                    <input onChange={e => nameHandler(e)} value={name} onBlur={e => blurHandler(e)} type="text" name="Name" id="Name" placeholder='Введите имя' />
                </div>
                <div className="SurnameContainer">
                    <div className="RevName">Вашa фамилия</div>
                    {(surnamedirty && surnameerr) && <div style={{ color: 'red' }}>{surnameerr}</div>}
                    <input onChange={e => surnameHandler(e)} value={surname} onBlur={e => blurHandler(e)} type="text" name="Surname" id="Surname" placeholder='Введите фамилию' />
                </div>
                <div className="UserRev">Ваш отзыв</div>
                {(reviewdirty && reviewerr) && <div style={{ color: 'red' }}>{reviewerr}</div>}
                <textarea onChange={e => revHandler(e)} value={review} onBlur={e => blurHandler(e)} type="text" className='ReviewFieldInput' maxLength={325} name="Rev" id="Rev" placeholder='Введите отзыв' />
                <button type="submit" disabled={!isformValid} className='buttonRev' onClick={event => {
                    SendReview(name, surname, review);
                    ChangeData(1);
                }}>отправить</button>
                <NavLink exact to="/">
                    <div className="RevHome">
                        Назад на главную
                    </div>
                </NavLink>
            </div>
        </div>
    )
}

export default ReviewInput