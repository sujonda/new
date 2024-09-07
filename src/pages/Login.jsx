import { useState } from "react";

import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { TbFidgetSpinner } from "react-icons/tb";
import { useDispatch } from "react-redux";
import axiosSecure from "../api";
import toast from "react-hot-toast";
import { setAuthUser } from "../redux/slice/authSlice";



const Login = () => {
    
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [loader, setLoader] = useState(false);
    const handleLogin = async (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const userData = {
             email, password
        }
        try {
            setLoader(true)
            const res = await axiosSecure.post(`/login`, userData); 
            console.log(res);
            if (res && res.data) {
                if (res.data.success) {
                    dispatch(setAuthUser(res?.data?.user));
                    toast.success(res.data.message);
                    navigate('/');
                }}
        } catch (error) {
           toast.error(error?.response?.data?.message) 
        }finally{
            setLoader(false)
        }
    }
    // const navigate = useNavigate();
    const [show, setShow] = useState(false);
    const showHide = () => {
        setShow(!show);
    };
    return (
        <>
            {/* <Helmet>
            <title>E-Shop | Sign Up</title>
        </Helmet> */}
            <div className="flex justify-center items-center min-h-screen">
                <div className="flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900">
                    <div className="mb-8 text-center">
                        <h1 className="my-3 text-4xl font-bold">Sign Up</h1>
                        <p className="text-sm text-gray-400">Welcome to E-Shop</p>
                    </div>
                    <form
                        onSubmit={handleLogin}
                        noValidate=""
                        action=""
                        className="space-y-6 ng-untouched ng-pristine ng-valid"
                    >
                        <div className="space-y-4">
                            

                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm">
                                    Email address
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    placeholder="Enter Your Email Here"
                                    className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                    data-temp-mail-org="0"
                                />
                            </div>



                            <div>
                                <div className="flex justify-between">
                                    <label htmlFor="password" className="text-sm mb-2">
                                        Password
                                    </label>
                                </div>

                                <div className="flex items-center relative">
                                    <input
                                        type={show ? "text" : "password"}
                                        name="password"
                                        autoComplete="new-password"
                                        id="password"
                                        required
                                        placeholder="*******"
                                        className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900"
                                    />
                                    <div className="absolute right-1">
                                        <button onClick={showHide}>
                                            {show ? <FaRegEyeSlash /> : <FaRegEye />}
                                        </button>
                                    </div>
                                </div>
                            </div>





                        </div>

                        <div>
                            <button
                                type="submit"
                                className="bg-rose-500 w-full rounded-md py-3 text-white"
                            >
                                {loader ? (
                                    <TbFidgetSpinner className="animate-spin m-auto" />
                                ) : (
                                    "Continue"
                                )}
                            </button>
                        </div>
                    </form>
                    <p className="px-6 text-sm text-center text-gray-400">
                       New User?{" "}
                        <Link
                            to="/signup"
                            className="hover:underline hover:text-rose-500 text-gray-600"
                        >
                            Signup
                        </Link>
                        .
                    </p>
                </div>
            </div>
        </>
    );
};

export default Login;