import { User } from "@/types/user"

export enum BoardMode {
    Guest = "guest"
}

export type Board = {
    id: string
    name: string
    mode: BoardMode
    author: User
    collaborators: User[]
}