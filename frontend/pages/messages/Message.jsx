import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../zustand/useConversation";
import { useGetMessages } from "../hooks/useGetMessages";

const Message = ({message}) => {

    const {loading, messages} = useGetMessages();
    const {authUser} = useAuthContext();
    const fromMe = message.senderId === authUser._id;
    const chatClassName = fromMe ? 'chat-start' : 'chat-end';
    

    return <>
     <div className={`chat ${chatClassName}`}>
        <span className="chat-content">{message.message}</span>
    </div>

    
    </>
}

export default Message;