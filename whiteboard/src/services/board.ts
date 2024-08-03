import baseService from "@/services/base";
import { Board } from "@/types/board";

export class BoardService {
    public async CreateNewGuestBoard() {
        try {
            const newBoard = await baseService.Post<Board>("board/new-board?mode=guest", {})
            return newBoard
        } catch (error) {
            return null
        }
    }
}

export default new BoardService()