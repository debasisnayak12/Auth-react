import { useContext , useEffect} from "react";
import { UserContext } from "../App";

const Profile = () => {
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        if (!user) {
            return <Navigate to="/signup" />;
        }
    }, [user]);

        const handleLogout = () => {
            localStorage.removeItem("user");
            setUser(null);
        }
  return (
    <div>
        <h1>Profile</h1>
        {
            user && 
            (
              <div className="user-details">
                <p>Username: {user.username}</p>  
                <p>Email: {user.email}</p>
                <p>Password: {user.password}</p>
                <button onClick={handleLogout}>Logout</button>
              </div>  
            )
        }
    </div>
  )
}

export default Profile