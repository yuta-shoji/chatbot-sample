import {QuestionTemplateListView} from "./QuestionTemplateListView.tsx";
import {TalkView} from "./TalkView.tsx";

export function ChatDetailView() {
    return (
        <div className="flex justify-between">
            <div className={`basis-10/12`}>
                <TalkView/>
            </div>

            <div className="basis-2/12">
                <QuestionTemplateListView/>
            </div>
        </div>
    )
}