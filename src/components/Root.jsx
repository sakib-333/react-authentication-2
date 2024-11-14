import React, { useContext } from "react";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import { AuthContext } from "../provider/AuthProvider";

const Root = () => {
  const { loading } = useContext(AuthContext);

  return (
    <>
      <Navbar />
      <div className="px-2 min-h-screen">
        {loading ? (
          <h1 className="text-2xl font-bold text-center">Loading...</h1>
        ) : (
          <Outlet />
        )}
      </div>
      <Footer />
    </>
  );
};

export default Root;
