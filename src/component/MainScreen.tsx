import {ChatDetailView} from "./ChatDetailView.tsx";
import {ChatListView} from "./ChatListView.tsx";
import {useSetAtom} from "jotai";
import {JotaiChatStates} from "../jotai/JotaiStetes.ts";
import {defaultChatList} from "../data.ts";

export function MainScreen() {
    useMainScreen()

    return (
        <div className={`
            flex justify-between h-lvh w-full
            bg-black text-white
        `}>
            <div>
                <ChatListView/>
            </div>

            <div className="h-full w-full">
                <ChatDetailView/>
            </div>
        </div>
    )
}

function useMainScreen() {
    const setChatList = useSetAtom(JotaiChatStates.chatList)

    setChatList(defaultChatList)
}
