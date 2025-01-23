import {atom} from "jotai";
import {Chat} from "../model/Chat.ts";

export const JotaiChatStates = {
    chatList: atom<Chat[]>([]),
    selectedChat: atom<Chat | null>(null),
}