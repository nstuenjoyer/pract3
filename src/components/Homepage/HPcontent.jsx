import './Homepage.css';
import BoardList from './Boards/BoardList';
import React, { useState } from "react";
function HPcontent() {
    const boards = [
        { id: 1, name: "Выбрать репетитора", imglink: "img/2.png", roadTo: "/turots" },
        { id: 2, name: "Отзывы", imglink: "img/1.jpg", roadTo: "/reviews" },
        { id: 3, name: "О нас", imglink: "img/3.webp", roadTo: "/about" }
    ]
    return (<div className="HomePageContent">
        <div className="AboutUs"><h1>ЕГЭ/ОГЭ уже на носу?</h1> <p>Поможем подобрать репетитора для подготовки к экзаменам!</p></div>
        <BoardList boards={boards}></BoardList>

    </div>);
}

export default HPcontent;