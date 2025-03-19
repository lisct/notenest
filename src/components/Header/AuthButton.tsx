import { useState, useEffect } from "react";
import { removeLoginData, getLoginData } from "../lib/loginStorage";
import { Link } from "react-router-dom";
import NavLink from "./NavLink";

const AuthButton = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const loginData = getLoginData();
    setIsLoggedIn(!!loginData);
  }, []);

  const handleLogout = () => {
    removeLoginData();
    setIsLoggedIn(false);
  };

  return (
    <>
      {!isLoggedIn ? (
        <NavLink to="/login" text="Login" />
      ) : (
        <Link to="/" onClick={handleLogout}>
          Logout
        </Link>
      )}
    </>
  );
};

export default AuthButton;
