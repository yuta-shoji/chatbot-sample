import {questionTemplateList} from "../data.ts";
import {scrollBarStyle} from "../scrollBarStyle.ts";

export function QuestionTemplateListView() {
    const {
        questionTemplateList
    } = useQuestionTemplateListView()

    return (
        <div className={`
            flex flex-col gap-1
            h-lvh
            shadow-[0_-10px_15px_rgba(60,60,60,1)]
            bg-gray-700
        `}>
            <div className={`p-3`}>質問テンプレート</div>

            <div className={`
                pr-4 pl-4 pb-4 flex flex-col gap-3
                bg-gray-700
                overflow-y-scroll
                h-lvh
                ${scrollBarStyle}
            `}>
                {questionTemplateList.map((questionTemplate, index) => (
                    <div
                        className={`
                            cursor-pointer
                            bg-gray-800 rounded-md p-2 text-xs text-gray-300
                            hover:drop-shadow-[0_10px_20px_rgba(255,255,255,0.1)]
                        `}
                        key={`question-template-${index}`}
                    >
                        {questionTemplate}
                    </div>
                ))}
            </div>
        </div>
    )
}

function useQuestionTemplateListView() {
    return {
        questionTemplateList
    }
}