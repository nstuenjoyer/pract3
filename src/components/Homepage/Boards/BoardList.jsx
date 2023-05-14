import Board from "./Board";
import './Board.css';
const BoardList = ({ boards }) => {

    return (<div className="BoardList">
        {boards.map(board =>
            <Board board={board} key={board.id}></Board>
        )}
    </div>
    );
}
export default BoardList;