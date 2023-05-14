import { NavLink } from "react-router-dom";

const Board = (props) => {

    return (<div className="Board">
        < NavLink to={props.board.roadTo} className={"navlink"}>
            <img src={props.board.imglink} alt="" className="Icon" />
            <div className="BoardName">
                {props.board.name}
            </div>

        </NavLink>

    </div>);
}
export default Board;