import {MessageFrom} from "./MessageFrom.ts";

export interface Chat {
    id: number
    title: string
    messages: Message[]
}

export interface Message {
    from: MessageFrom
    datetime: Date
    value: string
}