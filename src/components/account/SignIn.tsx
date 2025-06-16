import { useState } from "react";
import config from "../../config";
import { useAuth } from "../../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const SignIn = () => {
  const { setAuth } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigation = useNavigate();
  const onNavigateTree = (link: string) => {
    navigation(link, { replace: true });
  };
  const onLogin = async () => {
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
        toast.success("Logged in successfully!");
      } else {
        toast.error(res.message || "Login failed.");
      }
    } catch (error) {
      toast.error("Network error");
      console.error("Login error:", error);
    }
  };

  return (
    <div className="mx-50 my-16 py-10 bg-[#1D1616] rounded-4xl text-white">
      <div className="flex flex-col text-start px-20">
        <p className="text-3xl font-bold mb-4">Login to your account</p>
        <p className="text-lg mb-4">
          Don’t have an account?{" "}
          <u onClick={() => navigation("/sign-up")}>Click here</u> to sign up.
        </p>
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
              onClick={async () => {
                await onLogin();
                onNavigateTree("/account");
              }}
              className="p-2 px-4 bg-red-900 rounded-2xl mt-2"
            >
              Login
            </button>
          </div>
        </>
      </div>
    </div>
  );
};

export default SignIn;
