import {InputView} from "./InputView.tsx";
import {useAtomValue} from "jotai";
import {JotaiChatStates} from "../jotai/JotaiStetes.ts";
import {Chat} from "../model/Chat.ts";
import {RiRobot2Line} from "react-icons/ri";
import { FaUser } from "react-icons/fa";
import {MessageFrom} from "../model/MessageFrom.ts";

export function TalkView() {
    const {selectedChat} = useTalkView()

    return (
        <div className={`
            flex flex-col justify-between items-center
            h-lvh p-12
            bg-gray-900
        `}>
            <div className={`
                flex flex-col gap-4 w-full
            `}>
                {selectedChat && selectedChat.messages.map((message, index) => (
                    <div className={`
                        flex gap-4 items-center
                        ${message.from === MessageFrom.ME
                            ? 'justify-end'
                            : 'justify-start'
                        }   
                    `}>
                        {message.from === MessageFrom.BOT && <RiRobot2Line />}

                        <div
                            className={`
                                bg-gray-800 p-4 rounded-lg
                            `}
                            key={index}
                        >
                            {message.value}
                        </div>
                        {message.from === MessageFrom.ME && <FaUser />}

                    </div>
                ))}
            </div>

            <InputView/>
        </div>
    )
}

function useTalkView() {
    const selectedChat = useAtomValue<Chat | null>(JotaiChatStates.selectedChat)
    console.log({selectedChat})

    return {selectedChat}
}