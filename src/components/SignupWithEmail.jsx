import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { toast } from "react-toastify";

const SignupWithEmail = () => {
  const { signupUser, setLoading } = useContext(AuthContext);

  const handleSignup = (e) => {
    e.preventDefault();

    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    signupUser(email, password)
      .then(() => {
        toast.success("You have successfully registered");
      })
      .catch((error) => {
        toast.error(error.message), setLoading(false);
      });
  };
  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <form className="card-body" onSubmit={handleSignup}>
        <div className="form-control">
          <label className="label">
            <span className="label-text">Name</span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="input input-bordered"
            required
          />
        </div>
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
          <button className="btn btn-success text-white">Sign up</button>
        </div>
        <label className="label">
          <span className="label-text-alt">Already have an account?</span>
          <Link to={"/signin"} className="label-text-alt link link-hover">
            Sign in
          </Link>
        </label>
      </form>
    </div>
  );
};

export default SignupWithEmail;
