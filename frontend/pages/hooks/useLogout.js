import { useState } from "react"
import { useAuthContext } from "../../context/AuthContext";
import { toast } from "react-hot-toast";

export const useLogout = () => {
    const [loading, setLoading] = useState(false);

    const {setAuthUser} = useAuthContext();

    const logout = async () => {
        try {
            const res = await fetch('/api/auth/logout', {
                method: 'POST',
                headers: {'Content-Type' : 'application/json'}
            });
            
            if(res.error)
            {
                throw new Error(error.message);
            }
    
            localStorage.removeItem('chat-user');
            setAuthUser(null);
            
        } catch (error) {
            toast.error(error.message);
        }
        finally{
            setLoading(false);
        }
    }
    
    return { loading, logout };
}