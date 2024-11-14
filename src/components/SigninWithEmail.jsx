import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const SigninWithEmail = () => {
  const { user, signinUser, setLoading } = useContext(AuthContext);

  const handleSignin = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const password = e.target.password.value;

    signinUser(email, password)
      .then((userCredential) => {
        toast.success(`Welcome ${userCredential.user.email}`);
      })
      .catch((error) => {
        toast.error(error.message), setLoading(false);
      });
  };
  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSignin}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input
            type="email"
            name="email"
            placeholder="email"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="password"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Login</button>
        </div>
        <label className="label">
          <span className="label-text-alt">Dont't have an account?</span>
          <Link to={"/signup"} className="label-text-alt link link-hover">
            Sign up
          </Link>
        </label>
      </form>
    </div>
  );
};

export default SigninWithEmail;
