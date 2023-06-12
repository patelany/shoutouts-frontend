import { useContext } from "react";
import { signInWithGoogle, signOut } from "../firebaseConfig";
import "./Header.css";
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  return (
    <header className="Header">
      <div>
        <h1>Shoutout App</h1>

        {user ? (
          <div className="loggedIn">
            <p>Welcome, {user?.displayName}</p>
            <img src={user.photoURL || ""} alt="profile image" />
            <button onClick={() => signOut()}>Sign Out</button>
          </div>
        ) : (
          <div className="loggedOut">
            <p>Please Sign In</p>
            <button onClick={() => signInWithGoogle()}>Sign In</button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
