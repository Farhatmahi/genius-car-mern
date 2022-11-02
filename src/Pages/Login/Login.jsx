import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../../assets/images/login/login.svg"
import { FaGoogle, FaFacebookF, FaGithubAlt } from "react-icons/fa";
import { AuthContext } from "../../Context/AuthProvider/AuthProvider";

const Login = () => {

    const {signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate()
    const handleLogin = e => {
        e.preventDefault();

        signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        navigate('/')
      })
      .catch((err) => {
        console.error(err);
      });
    }

  return (
    <div className="hero w-full my-20">
      <div className="hero-content grid gap-20 md:grid-cols-2 flex-col lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={image} className="w-3/4" alt="" />
        </div>
        <div className="card w-full max-w-sm shadow-2xl bg-base-100 pb-6">
          <form onSubmit={handleLogin} className="card-body">
            <h1 className="text-5xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="text"
                name="email"
                placeholder="email"
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
              <label className="label">
                <Link to="/src" className="label-text-alt link link-hover">
                  Forgot password?
                </Link>
              </label>
            </div>
            <div className="form-control mt-6">
                <input type="submit" value="Login" className="btn bg-orange-600"/>
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
          <p className="text-center">New to Genius Car? <Link to="/signup" className="text-orange-600 font-semibold">Sign Up</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
