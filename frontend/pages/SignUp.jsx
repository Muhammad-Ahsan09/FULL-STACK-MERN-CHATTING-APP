import { Link } from "react-router-dom";
import GenderCheckbox from "./GenderCheckbox";
import { useState } from "react";
import { useSignup } from "./hooks/useSignup";
import { toast } from "react-hot-toast";

const SignUp = () => {

    const { loading, signup } = useSignup();

    const [inputs, setInputs] = useState({
        fullName: '',
        userName: '',
        password: '',
        confirmPassword: '',
        gender: ''
    });

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const user = await signup(inputs);
        setInputs({
            fullName: '',
            userName: '',
            password: '',
            confirmPassword: '',
            gender: ''
        });


    }

    return <center className="signup-window-container">
        <h1>Sign Up <span className="color-blue">Chatify</span></h1>

        <form onSubmit={(event) => { handleSubmit(event) }}>
            <div className="fullname-label-container">
                <label htmlFor="fullname">Full Name</label>
            </div>

            <div className="fullname-input-container">
                <input type="text" name="fullname" className="fullname text-input" placeholder="John Doe"
                    value={inputs.fullName} onChange={(event) => setInputs({ ...inputs, fullName: event.target.value })} />
            </div>

            <div className="username-label-container">
                <label htmlFor="username">Username</label>
            </div>

            <div className="username-input-container">
                <input type="text" name="username" className="username text-input" placeholder="JohnDoe"
                    value={inputs.userName} onChange={(event) => setInputs({ ...inputs, userName: event.target.value })} />
            </div>

            <div className="password-label-container">
                <label htmlFor="password">Password</label>
            </div>

            <div className="password-input-container">
                <input type="password" name="password" className="password text-input" placeholder="Keep a strong password"
                    value={inputs.password} onChange={(event) => setInputs({ ...inputs, password: event.target.value })} />
            </div>

            <div className="confirm-password-label-container">
                <label htmlFor="confirm-password">Confirm Password</label>
            </div>

            <div className="confirm-password-input-container">
                <input type="password" name="password" className="confirm-password text-input" placeholder="Confirm password"
                    value={inputs.confirmPassword} onChange={(event) => setInputs({ ...inputs, confirmPassword: event.target.value })} />
            </div>

            <GenderCheckbox handleCheckboxChange={handleCheckboxChange} selectedGender={inputs.gender} />

            <div className="link-container">
                <Link to="/login" className="link">Already have an account?</Link>
            </div>

            <div className="signup-button-container">
                <button type="submit" className="submit-button">Sign Up</button>
            </div>
        </form>
    </center>
}

export default SignUp;