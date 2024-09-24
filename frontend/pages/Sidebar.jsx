import { IoSearchSharp } from "react-icons/io5";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import { useLogout } from "./hooks/useLogout";

const Sidebar = () => {

    

    return <div className="sidebar-container">
    <SearchInput/>
    <Conversations/>
    <LogoutButton />
    </div>
}

export default Sidebar;