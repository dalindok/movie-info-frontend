import { useState } from "react";
import config from "../../config";
import { useAuth } from "../../contexts/UserContext";

const SignIn = () => {
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [showForgot, setShowForgot] = useState(false);
  const [forgotEmail, setForgotEmail] = useState("");
  const [resetMessage, setResetMessage] = useState("");

  const onLogin = async () => {
    setErrorMessage("");

    try {
      const response = await fetch(`${config.baseURL}/api/user/sign-in`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      const res = await response.json();

      if (response.ok && res.token && res.data) {
        setAuth(res.token, res.data);
        console.log("Login Success:", res);
        // Optionally redirect
      } else {
        setErrorMessage(res.message || "Login failed.");
      }
    } catch (error) {
      console.error("Login error:", error);
      setErrorMessage("Network error. Please try again.");
    }
  };

  const onForgotPassword = async () => {
    setResetMessage("");
    if (!forgotEmail) {
      setResetMessage("Please enter your email.");
      return;
    }

    try {
      const response = await fetch(`${config.baseURL}/api/password/forgot`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email: forgotEmail }),
      });

      const res = await response.json();

      if (response.ok) {
        setResetMessage("Reset link sent! Check your email.");
        setForgotEmail("");
      } else {
        setResetMessage(res.message || "Something went wrong.");
      }
    } catch (error) {
      setResetMessage("Network error. Please try again.");
    }
  };

  return (
    <div className="mx-50 my-16 py-10 bg-[#1D1616] rounded-4xl text-white">
      <div className="flex flex-col text-start px-20">
        <p className="text-3xl font-bold mb-4">Login to your account</p>
        <p className="text-lg mb-4">
          Don’t have an account? <u>Click here</u> to sign up.
        </p>

        {errorMessage && <p className="text-red-400 mb-4">{errorMessage}</p>}

        {!showForgot ? (
          <>
            <div className="mb-4">
              <p className="text-xl font-semibold">Email</p>
              <input
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="border-2 py-1.5 border-white rounded-lg w-full bg-transparent"
                placeholder="Enter your email"
              />
            </div>

            <div className="mb-4">
              <p className="text-xl font-semibold">Password</p>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="border-2 py-1.5 border-white rounded-lg w-full bg-transparent"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex flex-row gap-4 mb-4">
              <button
                onClick={onLogin}
                className="p-2 px-4 bg-red-900 rounded-2xl mt-2"
              >
                Login
              </button>
              <button className="mt-2">Cancel</button>
            </div>

            <p
              className="font-extralight cursor-pointer underline"
              onClick={() => setShowForgot(true)}
            >
              Forgot Password?
            </p>
          </>
        ) : (
          <>
            <div className="mb-4">
              <p className="text-xl font-semibold">Enter your email</p>
              <input
                type="text"
                value={forgotEmail}
                onChange={(e) => setForgotEmail(e.target.value)}
                className="border-2 py-1.5 border-white rounded-lg w-full bg-transparent"
                placeholder="Email address"
              />
            </div>

            <button
              onClick={onForgotPassword}
              className="p-2 px-4 bg-red-900 rounded-2xl mt-2"
            >
              Send Reset Link
            </button>
            <button
              onClick={() => setShowForgot(false)}
              className="ml-4 mt-2 text-white underline"
            >
              Back to Login
            </button>

            {resetMessage && (
              <p className="mt-4 text-sm text-yellow-400">{resetMessage}</p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default SignIn;
