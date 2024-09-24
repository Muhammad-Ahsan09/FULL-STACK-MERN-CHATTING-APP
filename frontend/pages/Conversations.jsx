import Conversation from "./Conversation";
import { useGetConversation } from "./hooks/useGetConversations";

const Conversations = () => {

    const { loading, conversations } = useGetConversation();


    return <div>
        {conversations.map((conversation, index) => <Conversation key={conversation._id} conversation={conversation}/>)}

    </div>
}

export default Conversations;