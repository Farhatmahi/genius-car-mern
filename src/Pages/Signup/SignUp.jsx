import React, { useContext } from "react";
import { Link } from "react-router-dom";
import image from "../../assets/images/login/login.svg";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";
import { FaGoogle, FaFacebookF, FaGithubAlt } from "react-icons/fa";

const SignUp = () => {
  const { createUser, signInWithGoogle } = useContext(AuthContext);
  const handleSignUp = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });

    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((err) => {
        console.error(err);
      });
  };
  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={image} className="w-3/4" alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 pb-6">
          <form onSubmit={handleSignUp} className="card-body">
            <h1 className="text-5xl font-bold text-center">Sign Up</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your email"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="text"
                name="password"
                placeholder="password"
                className="input input-bordered"
              />
            </div>
            <div className="form-control mt-6">
              <input
                type="submit"
                value="Sign Up"
                className="btn bg-orange-600"
              />
            </div>
            <div className="flex justify-center flex-col">
              <p className="text-center my-3">Or sign up with</p>
              <div className="flex justify-around mx-5">
                <button className="btn btn-ghost btn-circle bg-gray-200">
                  <FaFacebookF />
                </button>
                <button className="btn btn-ghost btn-circle bg-gray-200">
                  <FaGoogle />
                </button>
                <button className="btn btn-ghost btn-circle bg-gray-200">
                  <FaGithubAlt />
                </button>
              </div>
            </div>
          </form>
          <p className="text-center">
            Already have an account{" "}
            <Link to="/login" className="text-orange-600 font-semibold">
              Log in
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
