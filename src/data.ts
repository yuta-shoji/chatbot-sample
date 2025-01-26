import {Chat} from "./model/Chat.ts";
import {MessageFrom} from "./model/MessageFrom.ts";


export const defaultChatList: Chat[] = [
    {
        id: 1,
        title: '今日の天気について教えてください',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date('2025-01-10T09:00:00'),
                value: '今日の天気は？'
            },
            {
                from: MessageFrom.BOT,
                datetime: new Date('2025-01-10T09:00:02'),
                value: '今日は晴れのち曇りです'
            },
            {
                from: MessageFrom.ME,
                datetime: new Date('2025-01-10T09:05:00'),
                value: 'では、明日の天気は？'
            },
            {
                from: MessageFrom.BOT,
                datetime: new Date('2025-01-10T09:05:12'),
                value: '明日は大雨です、傘をお忘れなく。'
            },
            {
                from: MessageFrom.ME,
                datetime: new Date('2025-01-10T09:05:00'),
                value: 'まじか、やめてほしいんだけど'
            },
            {
                from: MessageFrom.BOT,
                datetime: new Date('2025-01-10T09:05:12'),
                value: 'そんなこと言われてむ無理やて。おれBOTやし。ーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー'
            },
            {
                from: MessageFrom.ME,
                datetime: new Date('2025-01-10T09:05:00'),
                value: '本気出してよ'
            },
            {
                from: MessageFrom.BOT,
                datetime: new Date('2025-01-10T09:05:12'),
                value: 'しゃーねーな、いっちょやったるか'
            },
            {
                from: MessageFrom.ME,
                datetime: new Date('2025-01-10T09:05:00'),
                value: '本気出してよ'
            },
            {
                from: MessageFrom.BOT,
                datetime: new Date('2025-01-10T09:05:12'),
                value: 'しゃーねーな、いっちょやったるか'
            },
            {
                from: MessageFrom.ME,
                datetime: new Date('2025-01-10T09:05:00'),
                value: '本気出してよ'
            },
            {
                from: MessageFrom.BOT,
                datetime: new Date('2025-01-10T09:05:12'),
                value: 'しゃーねーな、いっちょやったるか'
            },
            {
                from: MessageFrom.ME,
                datetime: new Date('2025-01-10T09:05:00'),
                value: '本気出してよーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーーー'
            },
            {
                from: MessageFrom.BOT,
                datetime: new Date('2025-01-10T09:05:12'),
                value: 'しゃーねーな、いっちょやったるか'
            },
            {
                from: MessageFrom.ME,
                datetime: new Date('2025-01-10T09:05:00'),
                value: '本気出してよ'
            },
            {
                from: MessageFrom.BOT,
                datetime: new Date('2025-01-10T09:05:12'),
                value: 'しゃーねーな、いっちょやったるか'
            },
        ]
    },
    {
        id: 2,
        title: 'chat2',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 2'
            }
        ]
    },
    {
        id: 3,
        title: 'chat3',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 3'
            }
        ]
    },
    {
        id: 4,
        title: 'chat4',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 4'
            }
        ]
    },
    {
        id: 5,
        title: 'chat5',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 5'
            }
        ]
    },
    {
        id: 6,
        title: 'chat6',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 6'
            }
        ]
    },
    {
        id: 7,
        title: 'chat7',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 7'
            }
        ]
    },
    {
        id: 8,
        title: 'chat8',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 8'
            }
        ]
    },
    {
        id: 9,
        title: 'chat9',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 9'
            }
        ]
    },
    {
        id: 10,
        title: 'chat10',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 10'
            }
        ]
    },
    {
        id: 11,
        title: 'chat11',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 11'
            }
        ]
    },
    {
        id: 12,
        title: 'chat12',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 12'
            }
        ]
    },
    {
        id: 13,
        title: 'chat13',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 13'
            }
        ]
    },
    {
        id: 14,
        title: 'chat14',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 14'
            }
        ]
    },
    {
        id: 15,
        title: 'chat15',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 15'
            }
        ]
    },
    {
        id: 16,
        title: 'chat16',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 16'
            }
        ]
    },
    {
        id: 17,
        title: 'chat17',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 17'
            }
        ]
    },
    {
        id: 18,
        title: 'chat18',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 18'
            }
        ]
    },
    {
        id: 19,
        title: 'chat19',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 19'
            }
        ]
    },
    {
        id: 20,
        title: 'chat20',
        messages: [
            {
                from: MessageFrom.ME,
                datetime: new Date(),
                value: 'this is chat 20'
            }
        ]
    },
]

export const questionTemplateList: string[] = [
    '明日の天気は？',
    '今日のニュースは？',
    'おすすめの映画は？',
    '面白い雑学を教えて？',
    '近くのレストランを探して？',
    '今日の運勢は？',
    '英語で「ありがとう」はどう言うの？',
    '今何時？',
    '簡単なレシピを教えて？',
    '今週末のイベント情報を教えて？',
    '最近人気の音楽は？',
    '次の祝日はいつ？',
    '簡単なエクササイズを教えて？',
    '睡眠のコツは？',
    '有名な名言を教えて？',
    '世界の観光名所を教えて？',
    '好きな本を教えて？',
    '交通機関の運行状況は？',
    '面白いジョークを教えて？',
    '近くのカフェを教えて？',
    '天気に関するアドバイスを教えて？',
]
