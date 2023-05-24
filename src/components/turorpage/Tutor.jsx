import "./Tutor.css";

const Tutor = (props) => {
    // {props.tutor.tutor_img}
    let TypeOfStudy = "";
    if (props.tutor.is_home !== 0 && props.tutor.is_distance !== 0 && props.tutor.is_distance !== 0) {
        TypeOfStudy += "У ученика, Дистанционно, У репетитора"
    }
    if (props.tutor.is_home !== 1 && props.tutor.is_distance !== 0 && props.tutor.is_distance !== 0) {
        TypeOfStudy += "Дистанционно, У репетитора"
    }
    if (props.tutor.is_home !== 1 && props.tutor.is_distance !== 1 && props.tutor.is_distance !== 0) {
        TypeOfStudy += "У репетитора"
    }
    if (props.tutor.is_home !== 0 && props.tutor.is_distance !== 1 && props.tutor.is_distance !== 0) {
        TypeOfStudy += "У ученика, У репетитора"
    }
    if (props.tutor.is_home !== 0 && props.tutor.is_distance !== 1 && props.tutor.is_distance !== 1) {
        TypeOfStudy += "У ученика"
    }
    if (props.tutor.is_home !== 1 && props.tutor.is_distance !== 0 && props.tutor.is_distance !== 1) {
        TypeOfStudy += "Дистанционно"
    }





    return (
        <div className="TutorItem">
            <img className="TutorImg" src="" alt="" />

            <div className="TutorInfo">
                <div className="TutorInfoPart1">
                    <div className="TutorName">{props.tutor.tutor_surname} {props.tutor.tutor_name}  {props.tutor.tutor_middlename}</div>

                </div>
                <div className="TutorLesson">{props.tutor.tutor_lesson}</div>
                <div className="TutorAbout">
                    <h3 className="TutorH3">Образование</h3>
                    Образование
                    <h3 className="TutorH3">Формат занятий</h3>
                    {TypeOfStudy}

                </div>

                <div className="TutorAbout">
                    <h3 className="TutorH3">О себе</h3>
                    Тут чтото о чупике этом я не могу будет немого инфы где учился кто что напиишет но я не могу потдумаь для такого количества плашечки эти емае</div>
                <div className="TutorCost">{props.tutor.tutor_cost} руб/час | Контактный номер:{props.tutor.contact_info}</div>
            </div>
            <div className="TutorMark">{props.tutor.tutor_mark} </div>
        </div>

    );
}

export default Tutor;