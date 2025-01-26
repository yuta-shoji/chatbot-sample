import {InputView} from "./InputView.tsx";
import {useAtomValue} from "jotai";
import {JotaiChatStates} from "../jotai/JotaiStetes.ts";
import {Chat} from "../model/Chat.ts";
import {RiRobot2Line} from "react-icons/ri";
import {FaUser} from "react-icons/fa";
import {MessageFrom} from "../model/MessageFrom.ts";
import {BsArrowDownCircle} from "react-icons/bs";
import {useRef, useState} from "react";

export function TalkView() {
    const {
        selectedChat,
        scrollRef,
        showGoToBottomButton,
        onClickGoToBottomButton,
        onScroll,
    } = useTalkView()

    return (
        <div className={`
            flex flex-col justify-between items-center
            h-lvh pr-2 pl-2 pb-4
            bg-gray-800
        `}>
            <div
                className={`
                    flex flex-col gap-10 w-full
                    pr-6 pl-6 pt-6 pb-24
                    overflow-scroll
                    scroll-smooth
                `}
                onScroll={onScroll}
                ref={scrollRef}
            >
                {selectedChat && selectedChat.messages.map((message, index) => (
                    <div className={`
                        flex gap-4 items-center
                        ${message.from === MessageFrom.ME
                        ? 'justify-end pl-32'
                        : 'justify-start pr-32'
                    }   
                    `}>
                        {message.from === MessageFrom.BOT && <RiRobot2Line/>}

                        <div
                            className={`
                                bg-gray-900 bg-opacity-60 pt-2 pb-2 pr-4 pl-4 rounded-lg
                            `}
                            key={index}
                        >
                            {message.value}
                        </div>
                        {message.from === MessageFrom.ME && <FaUser/>}
                    </div>
                ))}
            </div>


            <div className={`w-full pr-4 pl-4 relative`}>
                <BsArrowDownCircle
                    className={`
                        bottom-10 absolute left-1/2 offset
                        text-2xl text-gray-500 
                        transition-opacity ease-in
                        ${showGoToBottomButton ? 'opacity-100' : 'opacity-0'}
                    `}
                    style={{top: -48}}
                    onClick={onClickGoToBottomButton}
                />
                <InputView/>
            </div>
        </div>
    )
}

function useTalkView() {
    const selectedChat = useAtomValue<Chat | null>(JotaiChatStates.selectedChat)
    const [showGoToBottomButton, setShowGoToBottomButton] = useState(true)
    const scrollRef = useRef<HTMLDivElement | null>(null)

    const onScroll = () => {
        if (!scrollRef.current) return

        const { scrollTop, scrollHeight, clientHeight } = scrollRef.current
        const atBottom = scrollHeight - scrollTop === clientHeight

        setShowGoToBottomButton(!atBottom)
    };

    const onClickGoToBottomButton = () => {
        if (scrollRef.current) {
            scrollRef.current?.scrollTo({
                top: scrollRef.current?.scrollHeight,
                behavior: "smooth",
            })
        }
    }

    return {
        selectedChat,
        scrollRef,
        showGoToBottomButton,
        onClickGoToBottomButton,
        onScroll,
    }
}