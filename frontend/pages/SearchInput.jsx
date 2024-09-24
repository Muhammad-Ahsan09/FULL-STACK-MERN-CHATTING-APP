import { IoSearchSharp } from "react-icons/io5";
import useConversation from "../zustand/useConversation";
import { useGetConversation } from "./hooks/useGetConversations";
import { toast } from "react-hot-toast";
import { useState } from "react";


const SearchInput = () => {
    const [search, setSearch] = useState('');
    const {setSelectedConversation} = useConversation();
    const {conversations} = useGetConversation();

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!search) return;

        if(search.length < 3)
        {
            return toast.error('Search length must be greater than 2');
        }

        const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLowerCase()));

        if(conversation)
        {
            setSelectedConversation(conversation);
            setSearch('');
        }

        else
        {
            toast.error('no user found');
        }
    }

    return <div className="">
    <form className="conversations-form" onSubmit={(e) => {handleSubmit(e)}}>
        <input type="text" name="" className="text-input extra-rounded-corner" placeholder="Search..." onChange={(e) => {setSearch(e.target.value)}}/>
        <button type="submit" className="search-button"><IoSearchSharp /></button>
    </form>
</div>
}

export default SearchInput;