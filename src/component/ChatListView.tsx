import {ChatOverview} from "./ChatOverview.tsx";
import {useAtomValue} from "jotai";
import {JotaiChatStates} from "../jotai/JotaiStetes.ts";
import {scrollBarStyle} from "../scrollBarStyle.ts";

export function ChatListView() {
    const {
        chatList,
    } = useChatListView()

    return (
        <div className={`
            flex flex-col gap-4
            w-60 h-full pt-4
            bg-gray-700
        `}>
            <div className="pl-2 text-xl font-bold">
                Chatbot_base
            </div>

            <div className={`
                flex flex-col gap-2
                overflow-auto
                ${scrollBarStyle}
            `}>
                {chatList.map(chat => (
                    <ChatOverview key={chat.id} chat={chat}/>
                ))}
            </div>

        </div>
    )
}

function useChatListView() {
    const chatList = useAtomValue(JotaiChatStates.chatList)

    return {
        chatList,
    }
}
