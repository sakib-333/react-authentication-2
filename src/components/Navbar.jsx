import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const defaultAvatar =
  "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp";

const Navbar = () => {
  const [avatar, setAvatar] = useState(defaultAvatar);
  const { user, setUser, signoutUser } = useContext(AuthContext);
  useEffect(() => {
    if (user?.photoURL) {
      setAvatar(user?.photoURL);
    }
  }, [user]);
  const handleLogoutUser = () => {
    signoutUser()
      .then(() => {
        setUser(null), toast.success(`Bye`);
        setAvatar(defaultAvatar);
      })
      .catch((error) => console.log("ERROR: ", error));
  };
  const navItems = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/orders">Orders</NavLink>
        </li>
      )}
    </>
  );
  return (
    <div className="navbar bg-base-200">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navItems}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <div
            onClick={handleLogoutUser}
            className="avatar cursor-pointer"
            title={`${user.email}\nTap to log out`}
          >
            <div className="w-12 h-12 rounded-full">
              <img src={avatar} />
            </div>
          </div>
        ) : (
          <Link to={"/signin"} className="btn">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
