import {HiOutlinePlus} from "react-icons/hi";
import {IoSend} from "react-icons/io5";
import {useRef, useState} from "react";

export function InputView() {
    const textareaRef = useRef<HTMLTextAreaElement | null>(null)
    const [value, setValue] = useState('')

    const handleInput = (event) => {
        const textarea = textareaRef.current;
        setValue(event.target.value)

        if (textarea) {
            textarea.style.height = '2px'
            textarea.style.height = `${Math.min(textarea.scrollHeight - 4, 300)}px`
        }
    }

    return (
        <div className={`
            w-full bg-gray-700 rounded-xl
            shadow-[0_-10px_40px_rgba(60,60,60,1)]
        `}>
            <textarea
                ref={textareaRef}
                value={value}
                onInput={handleInput}
                className={`h-12 w-full p-4 text-sm rounded-lg bg-gray-700 outline-none`}
                placeholder="Chatbotにメッセージを送る"
                required
            />
            <div className={`flex justify-between pb-4 pr-4 pl-4`}>
                <button>
                    <HiOutlinePlus className={`hover:text-green-300`}/>
                </button>
                <button
                    type="submit"
                    className=""
                >
                    <IoSend className={`hover:text-green-300`}/>
                </button>
            </div>
        </div>
    )
}