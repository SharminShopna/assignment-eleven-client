import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { Helmet } from "react-helmet";
import logInLottie from '../assets/lottie/login.json';
import Lottie from "lottie-react";
import auth from "../firebase/firebase.init";

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { userLogin, setUser, isDarkMode } = useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        userLogin(email, password)
            .then((result) => {
                const user = result.user;
                setUser(user);

                Swal.fire({
                    title: "Good job!",
                    text: "login successfully",
                    icon: "success",
                    didClose: () => {
                        navigate(location?.state ? location.state : "/");
                    }
                });
            })
            .catch((error) => {
              console.log(error)
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong!",
                });
            });
    };

    const provider = new GoogleAuthProvider();
    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((result) => {
                console.log('Successfully Google SignIn', result);
            })
            .catch((error) => {
                alert('Error', error);
            });
    };

    return (
        <>
            <Helmet>
                <title>Login | TutorBooking</title>
                <meta name="description" content="Login page for TutorBooking" />
            </Helmet>

            <div className={`min-h-screen flex justify-center items-center ${isDarkMode ? 'bg-gray-900' : 'bg-orange-50'} my-24`} data-aos="zoom-in">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="text-center lg:text-left w-96 lg:w-full ml-20">
                        <Lottie animationData={logInLottie}></Lottie>
                    </div>
                    <div className={`card max-w-2xl w-full rounded-none p-10 shadow-lg ${isDarkMode ? 'bg-gray-800 text-white' : 'bg-white'}`}>
                        <h2 className="text-2xl text-center font-semibold">Login Your Account</h2>
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-gray-900 dark:text-white">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control relative">
                                <label className="label">
                                    <span className="label-text text-gray-900 dark:text-white">Password</span>
                                </label>
                                <input name="password" type={showPassword ? 'text' : 'password'} placeholder="password" className="input input-bordered" required />
                                <button onClick={() => setShowPassword(!showPassword)} className="btn btn-xs absolute right-2 top-12">
                                    {showPassword ? <FaEye /> : <FaEyeSlash />}
                                </button>
                            </div>
                            <div className="form-control mt-6 space-y-2">
                                <button type="submit" className="btn bg-orange-400 text-white" data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Login with correct information">Login</button>
                                <div className="divider">OR</div>
                                <Link to="/" onClick={handleGoogleSignIn} className="btn hover:bg-orange-400 hover:text-white" data-tooltip-id="my-tooltip"
                                    data-tooltip-content="Click if you want to register with Google">
                                    <FcGoogle size={20} /> Login with Google
                                </Link>
                            </div>
                        </form>

                        <p className="text-center font-semibold">Do not Have An Account? <Link to="/register" className="text-red-600">Register</Link></p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Login;
