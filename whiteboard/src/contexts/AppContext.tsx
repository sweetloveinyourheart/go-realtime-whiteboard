"use client"
import boardService from "@/services/board";
import { Board, BoardMode } from "@/types/board";
import { User } from "@/types/user";
import { createContext, ReactNode, use, useState } from "react";

interface IAppContext {
    board: Board | null
    user: User | null
    startNewBoard: (mode: BoardMode) => Promise<string | null>
}

export const AppContext = createContext({} as IAppContext)

interface IAppProvider {
    children: ReactNode
}
export default function AppProvider({ children }: IAppProvider) {
    const [board, setBoard] = useState<Board | null>(null)
    const [user, setUser] = useState<User | null>(null)

    const startNewBoard = async (mode: BoardMode): Promise<string | null> => {
        let newBoard
        if (mode === BoardMode.Guest) {
            newBoard = await boardService.CreateNewGuestBoard()
        }

        if (!newBoard) {
            alert("Cannot create a board")
            return null;
        }

        setBoard(newBoard)
        setUser(newBoard.author)

        return newBoard.id
    }

    return (
        <AppContext.Provider value={{
            board,
            user,
            startNewBoard
        }}>
            {children}
        </AppContext.Provider>
    )
}