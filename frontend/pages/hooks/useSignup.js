import { useState } from "react"
import { AuthContextProvider, useAuthContext } from "../../context/AuthContext"; 
import toast, { Toaster } from 'react-hot-toast';

export const useSignup = () => {
    
    const [loading, setLoading] = useState(false);
    const {setAuthUser} = useAuthContext();
    
    const signup = async ({fullName, userName, password, confirmPassword, gender}) => {
        const success = handleInputErrors({fullName, userName, password, confirmPassword, gender});

        if(!success) return;

        setLoading(true);

        try {
            const res = await fetch('/api/auth/signup', {
                method: "POST",
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify({fullName, userName, password, confirmPassword, gender})
            })

            toast.success('Sign in Completed');
            const data = await res.json();

            if(data.error)
            {
                throw new Error(error.message);
            }

            localStorage.setItem('chat-user', JSON.stringify(data));
            setAuthUser(data);

        } 
        
        
        catch (error) {
            toast.error(error.message);
        } finally{
            setLoading(false);
        }
    }

    return {loading, signup};
}

function handleInputErrors({fullName, userName, password, confirmPassword, gender})
{

    if(!fullName || !userName || !password || !confirmPassword || !gender)
    {
        toast.error('Please fill all the fields');
        return false;
    }

    if(password !== confirmPassword)
    {
        toast.error("Passwords don't match");
        return false;
    }

    if(password.length < 6)
    {
        toast.error('password must be atleast 6 characters');
        return false;
    }
    
    return true;
}