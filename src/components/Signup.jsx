import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const [user, setUser] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const [successMsg, setSuccessMsg] = useState("");
    const [errMsg, setErrMsg] = useState("");
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setUser({...user, [e.target.name]: e.target.value });
    }

    const handleSignup = () => {
        if(!user.username || !user.email || !user.password || !user.confirmPassword){
            setErrMsg("Error: All fields are mandatory.");
            return;
        }
         if(user.password !== user.confirmPassword){
            setErrMsg("Error: Passwords do not match.");
            return;
        }
        const accessToken = generateAccessToken();

        localStorage.setItem("user", JSON.stringify({...user, accessToken}));

        setUser({
            username:"",
            email:"",
            password:"",
            confirmPassword:"",
        });

        setSuccessMsg("Successfully Signed up.");

        navigate("/profile");
    }

    const generateAccessToken = () => {
        return Array.from({length: 16}, () => 
            Math.floor(Math.random() * 256).toString(16).padStart(2, "0")
        ).join("");
    };

  return (
    <div className="signup-page">
        <h1>Signup</h1>
        <input 
            type="text"
            placeholder="Full Name"
            name="username"
            value={user.username}
            onChange={handleInputChange}
        />
        <input 
            type="email"
            placeholder="Email"
            name="email"
            value={user.email}
            onChange={handleInputChange}
        />
        <input 
            type="password"
            placeholder="Password"
            name="password"
            value={user.password}
            onChange={handleInputChange}
        />
        <input 
            type="password"
            placeholder="Confirm Password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleInputChange}
        />
        {errMsg && <p style={{color: "red"}}>{errMsg}</p>}
        {successMsg && <p style={{color: "green"}}>{successMsg}</p>}
        <button onClick={handleSignup}>Signup</button>
    </div>
  )
}

export default Signup