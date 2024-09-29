import { useParams } from "react-router";
import BoardDetailPage from "./BoardDetailPage"
import { IBoard } from "~/types";

interface PathParams {
    bid: string;
}

const Container = () => {
    
    const { bid } = useParams<PathParams>();

    const board: IBoard = { "id": 1, "uid": 1, "nickname": "user1", "email": "user1@gmail.com", "title": "title1", "body": "body1" }

    return <BoardDetailPage board={board} />
}

export default Container