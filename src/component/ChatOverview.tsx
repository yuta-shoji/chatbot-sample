import {Chat} from "../model/Chat.ts";
import {useAtom} from "jotai/index";
import {JotaiChatStates} from "../jotai/JotaiStetes.ts";

interface Props {
    chat: Chat
}

export function ChatOverview(
    {chat}: Props
) {
    const {onClickChatOverview} = useChatOverview()

    return (
        <div
            className={`
                min-h-12 flex items-center
                mr-2 ml-2 pr-3 pl-3
                bg-gray-800 opacity-60
                cursor-pointer
                rounded-md
                hover:drop-shadow-[0_10px_35px_rgba(255,255,255,0.25)]
            `}
            onClick={() => onClickChatOverview(chat)}
        >
            <div className="text-white opacity-100 truncate">{chat.title}</div>
        </div>
    )
}

function useChatOverview() {
    const [_, setSelectedChat] = useAtom(JotaiChatStates.selectedChat)

    const onClickChatOverview = (chat: Chat) => {
        setSelectedChat(chat)
    }

    return {onClickChatOverview}
}