import {ChatView} from "./ChatView.tsx";
import TemplateView from "./TemplateView.tsx";
import SuggestView from "./SuggestView.tsx";

export default function MainScreen() {
    return (
        <>
            <div className="flex">
                <TemplateView/>

                <ChatView/>

                <SuggestView/>
            </div>
        </>
    )
}