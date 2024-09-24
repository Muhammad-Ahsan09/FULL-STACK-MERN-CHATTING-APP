import { useEffect } from "react";
import useConversation from "../../zustand/useConversation";
import Message from "./Message"
import MessageInput from "./MessageInput";
import { HiMiniChatBubbleLeftRight } from "react-icons/hi2";
import Messages from "./messages";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
    const { selectedConversation, setSelectedConversation } = useConversation();

    useEffect(() => {
        return () => { setSelectedConversation(null) }
    }, [setSelectedConversation]);

    return <>


        {!selectedConversation ? <NoChatSelected /> : <div className="message-container">
            <div className="message-container-header">
                To: <span>{selectedConversation.fullName}</span>
            </div>
            <Messages />
            <MessageInput />
        </div>}
    </>
}

export default MessageContainer;

const NoChatSelected = () => {
            
    const { authUser } = useAuthContext();
    
    return <div className="no-chat-selected-container">
        <center className="no-chat-selected-message">
            Welcome to 🖐 {authUser.userName}
            <div>No Chat Selected</div>
            <div className="no-chat-icon-container">
                <HiMiniChatBubbleLeftRight />
            </div>
        </center>
    </div>
}