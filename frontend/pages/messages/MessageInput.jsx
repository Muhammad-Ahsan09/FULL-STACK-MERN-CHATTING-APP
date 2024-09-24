import { IoIosSend } from "react-icons/io";
import { useSendMessage } from "../hooks/useSendMessage";
import { useState } from "react";

const MessageInput = () => {

    const [message, setMessage] = useState('');

    const {loading, sendMessage} = useSendMessage();

    const handleSubmit = async (event) => {
        event.preventDefault();

        if(!message) return;

        await sendMessage(message);
        setMessage('');
    }

    return <div className="message-input">
        <form onSubmit={(event) => {handleSubmit(event)}}>
            <div className="message-input-container">
                <input type="text" name="message" className="message-input text-input" value={message} onChange={(event) => {setMessage(event.target.value)}} />
                <button className="send-message-button"><IoIosSend /></button>
            </div>
        </form>
    </div>
}

export default MessageInput;