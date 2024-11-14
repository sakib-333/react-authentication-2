import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import {
  handleSigninWithGithub,
  handleSigninWithGoogle,
} from "../utilities/signinWithSocial";

const SigninWithSocial = () => {
  const { signinUserWithGoogle, signinUserWithGithub } =
    useContext(AuthContext);
  return (
    <div className="card bg-gray-100 p-4 mt-4 border mx-auto w-full max-w-sm shrink-0">
      <div className="flex flex-col space-y-4">
        <button
          className="btn btn-outline"
          onClick={() => handleSigninWithGoogle(signinUserWithGoogle)}
        >
          Google
        </button>
        <button
          className="btn btn-outline"
          onClick={() => handleSigninWithGithub(signinUserWithGithub)}
        >
          Github
        </button>
      </div>
      <div className="divider"></div>
      <Link
        to={"/signin-with-email"}
        className="label-text-alt link link-hover text-center"
      >
        Sign in with email
      </Link>
    </div>
  );
};

export default SigninWithSocial;
