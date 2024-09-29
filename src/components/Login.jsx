import React, { useState, useEffect } from 'react';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup, sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from 'react-router-dom';
import { auth, googleProvider } from "./firebase";

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isRegistering, setIsRegistering] = useState(true);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [resetEmail, setResetEmail] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        document.title = "Login - Restream"; // Set the title for the sign-up page
    }, []);

    const handleSignUp = () => {
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Sign up successful!");
                navigate('/profile', { state: { displayName: userCredential.user.displayName, photoURL: userCredential.user.photoURL } });
            })
            .catch((error) => {
                console.error("Error signing up: ", error);
                alert(error.message);
            });
    };

    const handleSignIn = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                alert("Sign in successful!");
                navigate('/profile', { state: { displayName: userCredential.user.displayName, photoURL: userCredential.user.photoURL } });
            })
            .catch((error) => {
                console.error("Error signing in: ", error);
                alert(error.message);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                const user = result.user;
                navigate('/profile', { state: { displayName: user.displayName, photoURL: user.photoURL } });
            })
            .catch((error) => {
                console.error("Error signing in with Google: ", error);
                alert(error.message);
            });
    };

    const handleForgotPassword = () => {
        if (!resetEmail) {
            alert("Please enter your email to reset password.");
            return;
        }
        sendPasswordResetEmail(auth, resetEmail)
            .then(() => {
                alert(`Password reset email sent to ${resetEmail}`);
                setShowForgotPassword(false);
            })
            .catch((error) => {
                console.error("Error sending password reset email: ", error);
                alert(error.message);
            });
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-black">
            <h1 className="text-3xl font-bold text-center mt-3 mb-2  text-white"><a href="https://restream.io/">Restream</a></h1>
            <div className="w-full max-w-[22rem] h-[480px] m-3 p-8 space-y-5 bg-white shadow-md shadow-slate-600 rounded-lg">
                <h1 className="text-3xl font-bold text-center">
                    {isRegistering ? "Create Your Account" : "Sign In"}
                </h1>

                {showForgotPassword ? (
                    <>
                        <div className="space-y-4">
                            <input
                                type="email"
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Enter your email"
                                value={resetEmail}
                                onChange={(e) => setResetEmail(e.target.value)}
                            />
                        </div>
                        <button
                            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                            onClick={handleForgotPassword}
                        >
                            Send Password Reset Email
                        </button>
                        <button
                            className="w-full py-2 text-blue-500 hover:text-blue-700 transition duration-300 mt-4"
                            onClick={() => setShowForgotPassword(false)}
                        >
                            Back to Sign In
                        </button>
                    </>
                ) : (
                    <>
                        <button
                            className="w-full py-2 mt-4 flex items-center justify-center bg-white border border-gray-800 rounded-lg hover:bg-[aliceblue] transition duration-300"
                            onClick={handleGoogleSignIn}
                        >
                            <div className="size-5 mr-14">
                                <img src="/google-symbol.png" alt="" />
                            </div>
                            Continue with Google
                        </button>
                        <div className="text-center flex justify-center items-center text-gray-400">
                            <div className="border w-full mx-2"></div>
                            OR
                            <div className="border w-full mx-2"></div>
                        </div>
                        <div className="space-y-4">
                            <input
                                type="email"
                                className="w-full px-4 py-3 border border-black focus:border-blue-600 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <input
                                type="password"
                                className="w-full px-4 py-3 border border-black focus:border-blue-600 rounded-lg  focus:outline-none focus:ring-2 focus:ring-blue-400"
                                placeholder="Password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <button
                            className="w-full py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
                            onClick={isRegistering ? handleSignUp : handleSignIn}
                        >
                            {isRegistering ? "Sign Up" : "Sign In"}
                        </button>



                        <button
                            className="w-full text-sm text-blue-500 hover:text-blue-700 transition duration-300 mt-1"
                            onClick={() => setIsRegistering(!isRegistering)}
                        >
                            {isRegistering ? "Already have an account? Sign In" : "New here? Create an account"}
                        </button>

                        <button
                            className="w-full text-sm text-blue-500 hover:text-blue-700 transition duration-300 mt-1"
                            onClick={() => setShowForgotPassword(true)}
                        >
                            Forgot Password?
                        </button>
                    </>
                )}
            </div>
            <div className=" text-gray-500 text-xs font-medium my-4">
                <p>By signing up, you agree to the Terms of Service.</p>
                <p>You also agree to receive emails from Restream.</p>
            </div>
            <button className=" transition-all size-12 hover:size-14 bg-slate-700 m-2.5 absolute right-0 bottom-1 rounded-full text-gray-300 text-xs "> Need help?</button>
        </div>
    );
};

export default Login;
