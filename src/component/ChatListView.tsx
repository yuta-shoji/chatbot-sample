import {useEffect, useState} from "react";
import {Chat} from "../model/Chat.ts";
import {ChatOverview} from "./ChatOverview.tsx";
import {MessageFrom} from "../model/MessageFrom.ts";
import {useAtomValue} from "jotai";
import {JotaiChatStates} from "../jotai/JotaiStetes.ts";

export function ChatListView() {
    const {
        chatList,
        scrollBarStyle,
    } = useChatListView()

    return (
        <div className={`
            flex flex-col gap-4
            w-60 h-full pt-4 pb-4
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

    const scrollBarStyle: string = `
            [&::-webkit-scrollbar]:w-2
            [&::-webkit-scrollbar-track]:rounded-full
            [&::-webkit-scrollbar-track]:bg-gray-100
            [&::-webkit-scrollbar-thumb]:rounded-full
            [&::-webkit-scrollbar-thumb]:bg-gray-300
            dark:[&::-webkit-scrollbar-track]:bg-gray-700
            dark:[&::-webkit-scrollbar-thumb]:bg-gray-500
    `
    return {
        chatList,
        scrollBarStyle,
    }
}
