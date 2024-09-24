import { useEffect, useRef } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { useGetMessages } from "../hooks/useGetMessages";
import Message from "./Message";
import useListenMesssages from "../hooks/useListenMessages";

const Messages = () => {

    const {loading, messages} = useGetMessages();

    const lastMessageRef = useRef();

    useListenMesssages();

    useEffect(() => {
        setTimeout(() => {
            lastMessageRef.current?.scrollIntoView({behaviour: 'smooth'});
        }, 100)
    }, [messages])

    return <>
    {messages.map((message) => <div key={message._id} ref={lastMessageRef}><Message message={message}/></div> )}
    </>
}

export default Messages;