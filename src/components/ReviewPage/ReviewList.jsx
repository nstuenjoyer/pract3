import Review from "./Review";
import { useState } from "react";
import { useEffect } from "react";
import ReviewInput from "./ReviewInput/ReviewInput";
import './Review.css';
const ReviewList = () => {

    const [options, setOptions] = useState({
        method: 'GET',
        mode: 'cors',
    })
    const url = "http://localhost:2001";
    const [reviews, setData] = useState([]);
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
    const [currentmax, setCurrentmax] = useState(10)
    const scrollHandler = (e) => {
        if (e.target.documentElement.scrollHeight - (e.target.documentElement.scrollTop + window.innerHeight) < 50) {
            console.log('+')
            setCurrentmax(currentmax + 10)
            console.log(currentmax)
        }
    }
    const drawRev = () => {

        return (reviews.map(review => <Review review={review} key={review.idreviews}></Review>).slice(0, currentmax))
    }
    useEffect(() => {
        document.addEventListener('scroll', scrollHandler)
        return function () {
            document.removeEventListener('scroll', scrollHandler)
        };
    }, [])
    return (
        <div className="RevListContent">
            <ReviewInput></ReviewInput>
            <div className="reviewList">
                {
                    reviews.length !== 0
                        ?
                        drawRev()
                        :
                        <div>Отзыва не загружены</div>
                }
            </div>

        </div>
    )
}

export default ReviewList