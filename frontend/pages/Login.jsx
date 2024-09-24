import { useState } from "react";
import { Link } from "react-router-dom";
import { useLogin } from "./hooks/useLogin";

const Login = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    
    const {login} = useLogin();

    const handleSubmit = async (event) => {
        event.preventDefault();
        await login(userName, password);
    }

    return <center className="login-window-container">
        <h1>Login To <span className="color-blue">Chatify</span></h1>

        <form onSubmit={(event) => {handleSubmit(event)}}>
            <div>
                <label htmlFor="username">Username</label>
            </div>
            <input type="text" name="username" className="username text-input" placeholder="Username"
            value={userName} onChange={(event) => {setUserName(event.target.value)}}/>

            <div>
                <label htmlFor="password">Password</label>
            </div>
            <input type="password" name="password" className="password text-input" placeholder="Password" 
            value={password} onChange={(event) => {setPassword(event.target.value)}}/>

            <Link to="/signup" className="link">Dont have an account?</Link>

            <div className="login-button-container">
                <button type="submit" className="submit-button">Login</button>
            </div>
        </form>
        </center>
}

export default Login;