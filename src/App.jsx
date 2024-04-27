import { createContext, useState, useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Signup from "./components/Signup";
import Profile from "./components/Profile";

export const UserContext = createContext();

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(()=>{
      const userData = localStorage.getItem("user");
      if(userData){
        setUser(JSON.parse(userData));
      }
  },[]);

 


  return (
    <div className="app">
      {/* <Navbar /> */}
      <UserContext.Provider value={{user, setUser}}>
      <Routes>
        <Route path="/signup" element={<Signup />}/>
        <Route 
               path="/profile" 
               element={user ? <Profile /> : <Navigate to="/signup"/>}
        />
      </Routes>
      </UserContext.Provider>
    </div>
  )
}

export default App;