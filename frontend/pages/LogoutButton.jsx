import { RiLogoutBoxLine } from "react-icons/ri";
import { useLogout } from "./hooks/useLogout";


const LogoutButton = () => {
    const {logout} = useLogout();

    return <div className="logout-button">
    <RiLogoutBoxLine onClick={logout}/>
    </div>
}
export default LogoutButton;