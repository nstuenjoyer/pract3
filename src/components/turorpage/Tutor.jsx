import "./Tutor.css";

const Tutor = (props) => {
    // {props.tutor.tutor_img}
    return (
        <div className="TutorItem">
            <img className="TutorImg" src="" alt="" />

            <div className="TutorInfo">
                <div className="TutorInfoPart1">
                    <div className="TutorName">Фамилия имя отчество</div>

                </div>
                <div className="TutorLesson"> преподаваемый предмет</div>
                <div className="TutorAbout">
                    <h3 className="TutorH3">Образование</h3>
                    Образование</div>
                <div className="TutorAbout">
                    <h3 className="TutorH3">О себе</h3>
                    Тут чтото о чупике этом я не могу будет немого инфы где учился кто что напиишет но я не могу потдумаь для такого количества плашечки эти емае</div>
                <div className="TutorCost">стоимость</div>
            </div>
            <div className="TutorMark"> 4</div>
        </div>

    );
}

export default Tutor;