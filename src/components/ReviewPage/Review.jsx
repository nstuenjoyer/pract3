import { useContext } from "react";
import { AuthContext } from "../context/context";


const Review = (props) => {
    let sendingData = JSON.parse(JSON.stringify({ type: "delete", name: props.review.name, surname: props.review.surname, review: props.review.feedback }))

    const url = "http://localhost:2001";
    const fetchData = () => {

        fetch(url, {
            mode: 'cors',
            method: 'POST',
            body: JSON.stringify(sendingData)
        }).then(result => console.log('+')).catch(error => console.log('Ошибка запроса', error));
    }
    const { isAuth } = useContext(AuthContext);
    const DelReview = () => {
        const pass = prompt('пароль');
        if (pass !== "1986") {
            return;
        }
        fetchData();
    }
    return (
        <div className="ReviewItem">
            <div className="ReviewName">{props.review.name} {props.review.surname}</div>
            <div className="ReviewContent">{props.review.feedback}</div>
            <button className='buttonRev' onClick={event => DelReview()}>удалить отзыв</button>
        </div>
    )
}

export default Review