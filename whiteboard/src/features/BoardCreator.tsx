"use client"
import { AppContext } from "@/contexts/AppContext";
import { BoardMode } from "@/types/board";
import { Button } from "@radix-ui/themes";
import { useRouter } from "next/navigation";
import { use, useState } from "react";

function BoardCreator() {
    const app = use(AppContext)
    const router = useRouter()

    const [loading, setLoading] = useState<boolean>(false)

    const startNewBoard = async () => {
        try {
            setLoading(true)
            const boardId = await app.startNewBoard(BoardMode.Guest)
            if(!boardId) return;

            router.push(`/board/${boardId}`)
        } catch (error: any) {
            alert("Something went wrong, errors:" + error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-4">
            <div className="mb-8">
                <h1 className="text-4xl font-bold text-center mb-2">Welcome to Whiteboard</h1>
                <p className="text-center text-lg">Bring teams together with a free online whiteboard. No registration required.</p>
            </div>
            <div className="flex justify-center">
                <div className="border p-4 rounded-xl w-[300px]">
                    <h2 className="text-2xl font-bold text-center mb-1">Guest Mode</h2>
                    <p className="text-md text-center mb-4">No sign up required. Boards expire after 24 hours.</p>
                    <Button
                        loading={loading}
                        variant="soft"
                        radius="large"
                        style={{ width: "100%" }}
                        onClick={startNewBoard}
                    >
                        Start a whiteboard
                    </Button>
                </div>
            </div>
        </div>
    );
}

export default BoardCreator;