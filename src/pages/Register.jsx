

import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";

import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import "react-tooltip/dist/react-tooltip.css";
import { Tooltip } from "react-tooltip";
import registerLottie from '../assets/lottie/register.json'
import Lottie from "lottie-react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import auth from "../firebase/firebase.init";


const Register = () => {
  const PasswordValid = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
  const [showPassword, setShowPassword] = useState(false);
  const { createUser, setUser, updateUserProfile, isDarkMode } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    console.log({ name, photo, email, password });
    if (!PasswordValid.test(password)) {
      Swal.fire({
        title: "Error!",
        text: "Password is invalid. It should be at least 6 characters, with at least one uppercase letter.",
        icon: "error",
      });
      return;
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        Swal.fire({
          title: "Good job!",
          text: "Successfully Registered",
          icon: "success",
        });

        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            setUser({ displayName: name, photoURL: photo });
            navigate('/');
          })
          .catch((err) => {
            Swal.fire({
              title: "Error!",
              text: `Failed to update profile: ${err.message}`,
              icon: "error",
            });
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  const provider = new GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        Swal.fire({
          title: "Success!",
          text: "Successfully Google SignIn",
          icon: "success",
        });
        console.log("Successfully Google SignIn", result);
      })
      .catch((error) => {
        Swal.fire({
          title: "Error!",
          text: `Google login failed: ${error.message}`,
          icon: "error",
        });
      });
  };

  return (
    <>
      <Helmet>
        <title>Register | TutorBooking</title>
        <meta name="description" content="Helmet application" />
      </Helmet>
      <div className={`min-h-screen mt-20 flex justify-center items-center ${isDarkMode ? 'bg-gray-800' : 'bg-orange-50'}`} data-aos="zoom-in-up">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className="text-center lg:text-left w-96 lg:w-full">
            <Lottie animationData={registerLottie}></Lottie>
          </div>
          <div className={`card max-w-2xl w-full rounded-none p-10 ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`}>
            <h2 className="text-2xl text-center font-semibold">Register Your Account</h2>
            <form onSubmit={handleSubmit} className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  name="name"
                  type="text"
                  placeholder="name"
                  className={`input input-bordered ${isDarkMode ? 'text-white bg-gray-700' : 'text-black'}`}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Photo URL</span>
                </label>
                <input
                  name="photo"
                  type="text"
                  placeholder="Photo-url"
                  className={`input input-bordered ${isDarkMode ? 'text-white bg-gray-700' : 'text-black'}`}
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  name="email"
                  type="email"
                  placeholder="email"
                  className={`input input-bordered ${isDarkMode ? 'text-white bg-gray-700' : 'text-black'}`}
                  required
                />
              </div>
              <div className="form-control relative">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  name="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="password"
                  className={`input input-bordered ${isDarkMode ? 'text-white bg-gray-700' : 'text-black'}`}
                  required
                />
                <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-2 top-12">
                  {showPassword ? <FaEye /> : <FaEyeSlash />}
                </button>
              </div>
              <div className="form-control mt-6">
                <button type="submit" className="btn bg-orange-400 text-white" data-tooltip-id="my-tooltip" data-tooltip-content="Register with a password of uppercase & lowercase letter, number and more than six number">Register</button>
                <div className="divider">OR</div>
                <Link to="/" onClick={handleGoogleSignIn} className="btn hover:bg-orange-400 hover:text-white" data-tooltip-id="my-tooltip" data-tooltip-content="Click if you want to register with Google">
                  <FcGoogle size={20} /> Login with Google
                </Link>
              </div>
            </form>
            <p className="text-center font-semibold">Already Have An Account? <Link to="/logIn" className="text-red-600">Login</Link></p>
          </div>
        </div>
      </div>
      <Tooltip id="my-tooltip" />
    </>
  );
};

export default Register;
