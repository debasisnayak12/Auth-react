import { NavLink } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
        <p>Header</p>
        <div className="page">
            <NavLink to="/signup">Signup</NavLink>
            <NavLink to="/profile">Profile</NavLink>
        </div>
    </div>
  )
}

export default Navbar