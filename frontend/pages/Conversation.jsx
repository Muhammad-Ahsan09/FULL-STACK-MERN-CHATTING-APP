import { RxAvatar } from "react-icons/rx";
import useConversation from "../zustand/useConversation";

const Conversation = ({conversation}) => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;

    return <>
        <div className={`conversation-username ${isSelected ? 'selectedConversation' : ''}`} onClick={() => {setSelectedConversation(conversation)}}>
            <span><RxAvatar className="avatar"/></span>
            <div className={`username`}><b>{conversation.userName}</b></div>
        </div>
    </>
}

export default Conversation;